import express from "express";

import {
  createProductController,
  getfeaturedProduct,
  getAllProductsController,
  updateProductController,
  deleteProductController,
  getOneProductController,
} from "../Controllers/productController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();

//routes
// CREATE Product
router.post("/create", createProductController);

//Get ONe Product
router.get("/get/:id", getOneProductController);

// UPDATE Product
router.put("/update/:id", updateProductController);

// DELETE Product
router.delete("/delete/:id", deleteProductController);

//GET ALL Products
router.get("/getAll", getAllProductsController);

//Get Featured Product :
router.get("/getfeatured/:count", getfeaturedProduct);

export default router;
