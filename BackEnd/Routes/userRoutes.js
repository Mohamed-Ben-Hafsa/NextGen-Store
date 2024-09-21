import express from "express";
import {
  authUser,
  logoutUser,
  registerUser,
  updateUser,
  getAllUsers,
  getSpecificUser,
  deleteUserById,
} from "../Controllers/userController.js";
import { protect } from "../Middlewares/authMiddleware.js";
// import { authorizeAdmin } from "../Middlewares/authAdmin.js";

const router = express.Router();

router.delete("/:id", deleteUserById);
router.get("/:id", getSpecificUser);
router.get("/", getAllUsers);
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.put("/", protect, updateUser);

export default router;
