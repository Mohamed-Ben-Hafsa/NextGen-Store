import express from "express";
import {
  addProductToCart,
  getAllProductsInCart,
  deleteProductFromCart,
} from "../Controllers/cartController.js";

const router = express.Router();

router.post("/:id", addProductToCart);
router.get("/", getAllProductsInCart);
router.delete("/:id", deleteProductFromCart);

export default router;
