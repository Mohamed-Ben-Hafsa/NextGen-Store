import express from "express";
import expressAsyncHandler from "express-async-handler";
import {
  addWishlist,
  deleteAwishList,
  getAllWishLists,
} from "../Controllers/wishlistsController.js";

const router = express.Router();

router.get("/", getAllWishLists);
router.delete("/:id", deleteAwishList);
router.post("/:id", addWishlist);

export default router;
