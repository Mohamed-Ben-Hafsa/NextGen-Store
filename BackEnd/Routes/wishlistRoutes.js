import express from "express";
import expressAsyncHandler from "express-async-handler";
import {
  addWishlist,
  deleteAwishList,
  getAllWishLists,
} from "../Controllers/wishlistsController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllWishLists);
router.delete("/:id", protect, deleteAwishList);
router.post("/:id", protect, addWishlist);

export default router;
