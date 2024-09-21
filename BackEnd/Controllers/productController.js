import Product from "../Model/productModel.js";
import Category from "../Model/categoryModel.js";
import User from "../Model/userModel.js";
import asyncHandler from "express-async-handler";

// CREATE Product:

const createProductController = async (req, res) => {
  // validate the category :

  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(404).send({
      success: false,
      message: "Invalide Category ",
    });
  }

  try {
    const {
      name,
      description,
      image,
      brand,
      price,
      category,
      rating,
      isFeatured,
      quantity,
    } = req.body;

    if (!name || !description || !category || !quantity) {
      return res.status(500).send({
        success: false,
        message: "Please Provide all fields",
      });
    }
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      rating: req.body.rating,
      isFeatured: req.body.isFeatured,
      quantity: req.body.quantity,
    });
    await newProduct.save();
    res.status(201).send({
      success: true,
      message: "New Product Created",
      newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create Product api",
      error,
    });
  }
};

// GET ALL Products:
const getAllProductsController = async (req, res) => {
  let filter = {};
  if (req.query.categories) {
    filter = { category: req.query.categories.split(",") };
  }

  try {
    const productsList = await Product.find(filter).populate("category");
    if (!productsList) {
      return res.status(404).send({
        success: false,
        message: "No products found",
      });
    }
    res.status(200).send({
      success: true,
      totalProducts: productsList.length,
      productsList,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting All Products API",
      error,
    });
  }
};

// UPDATE Product
const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      image,
      brand,
      price,
      category,
      rating,
      isFeatured,
      quantity,
    } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        image,
        brand,
        price,
        category,
        rating,
        isFeatured,
        quantity,
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(500).send({
        success: false,
        message: "No Product To update is Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Product Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in update product api",
      error,
    });
  }
};

// DeLETE Product
const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(500).send({
        success: false,
        message: "Please provide Product ID",
      });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(500).send({
        success: false,
        message: "No Product is Found With this id",
      });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Product Deleted succssfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in Delete Product APi",
      error,
    });
  }
};

//get one Product

const getOneProductController = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "No Product is not found",
      });
    }
    res.status(200).send({
      success: true,
      totalProduct: product.length,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting the Product API",
      error,
    });
  }
};

//get Featured Product:

const getfeaturedProduct = async (req, res) => {
  const count = req.params.count ? req.params.count : 0;
  const products = await Product.find({ isFeatured: true }).limit(+count);

  if (!products) {
    res.status(500).json({ success: false });
  }
  res.send(products);
};

export {
  createProductController,
  getfeaturedProduct,
  getAllProductsController,
  updateProductController,
  deleteProductController,
  getOneProductController,
};
