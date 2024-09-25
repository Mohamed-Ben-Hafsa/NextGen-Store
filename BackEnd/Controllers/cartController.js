import asyncHandler from "express-async-handler";
import Product from "../Model/productModel.js";
import Cart from "../Model/cartModel.js";

// Add Product to Cart
const addProductToCart = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    // Find the product by ID
    const product = await Product.findById(id);

    // If product not found, return 404
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Find the user's cart or create a new one
    let cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      cart = await Cart.create({
        userId: req.user._id,
        products: [],
      });
    }

    // Add the product to the cart (ensuring uniqueness with addToSet)
    cart.products.addToSet(product._id);
    await cart.save();

    return res.status(200).json(cart); // Return updated cart
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

// Get All Products in Cart
const getAllProductsInCart = asyncHandler(async (req, res) => {
  try {
    // Find the user's cart and populate the product details
    const cart = await Cart.findOne({ userId: req.user._id }).populate(
      "products"
    );

    // Check if the cart exists and has products
    if (!cart || cart.products.length === 0) {
      return res.status(404).json({ message: "Your cart is empty" });
    }

    return res.status(200).json(cart.products); // Return products in the cart
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

// Delete Product from Cart
const deleteProductFromCart = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    // Find the product by ID
    const product = await Product.findById(id);

    // If product is not found, return 404
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Find the user's cart
    const cart = await Cart.findOne({ userId: req.user._id });

    // If cart is not found or empty, return 404
    if (!cart || cart.products.length === 0) {
      return res.status(404).json({
        message: "Your cart is empty",
      });
    }

    // Remove the product from the cart
    cart.products.pull(product._id);
    await cart.save();

    return res.status(200).json(cart.products); // Return updated cart
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

export { addProductToCart, getAllProductsInCart, deleteProductFromCart };
