import asyncHandler from "express-async-handler";
import Product from "../Model/productModel.js";
import Cart from "../Model/cartModel.js";
import User from "../Model/userModel.js";

const addProductToCart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({
        message: "product is not found",
      });
      return;
    }

    let cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      cart = await Cart.create({
        userId: req.user._id,
        products: [],
      });
    }

    await cart.products.addToSet(product._id);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

const getAllProductsInCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate(
      "products"
    );

    res.json(cart.products);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

const deleteProductFromCart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    const cart = await Cart.findOne({ userId: req.user._id });

    if (!product) {
      res.status(404).json({
        message: "Product is not found",
      });
    }

    if (!cart) {
      res.status(500).json({
        message: "your cart is empty , add products",
      });
    }

    await cart.products.pull(id);
    await cart.save();
    res.json(cart.products);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export { addProductToCart, getAllProductsInCart, deleteProductFromCart };
