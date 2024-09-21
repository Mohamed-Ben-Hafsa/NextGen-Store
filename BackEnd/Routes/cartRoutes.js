import express from "express";
import {
  addProductToCart,
  getAllProductsInCart,
  deleteProductFromCart,
} from "../Controllers/cartController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/:id", protect, addProductToCart);
router.get("/", protect, getAllProductsInCart);
router.delete("/:id", protect, deleteProductFromCart);

export default router;
