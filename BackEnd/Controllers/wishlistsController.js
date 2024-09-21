import Product from "../Model/productModel.js";
import asyncHandler from "express-async-handler";

//add to wishlist

//Add Product To wishlist :
const addWishlist = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(500).send({
        success: false,
        message: "No Product is Found With this id",
      });
    }
    await req.user.wishList.addToSet(product._id);
    await req.user.save();
    console.log(product);
    res.status(200).json(req.user.wishList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Try again..",
    });
  }
});

const getAllWishLists = asyncHandler(async (req, res) => {
  await req.user.populate("wishList");
  res.json(req.user.wishList);
});

const deleteAwishList = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({
        message: "Product is not found",
      });
      return;
    }
    await req.user.wishList.pull(id);
    await req.user.save();

    res.json(req.user.wishList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Try again..",
    });
  }
});

export { addWishlist, getAllWishLists, deleteAwishList };
