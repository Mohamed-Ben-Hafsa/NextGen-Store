import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import CategoryRoutes from "./Routes/categoryRoutes.js";

import orderRoutes from "./Routes/orderRoutes.js";
import ProductRoutes from "./Routes/productRoutes.js";
import { errorHandler, notFound } from "./Middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import wishlistRoutes from "./Routes/wishlistRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 4000;
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/category", CategoryRoutes);
app.use("/api/product", ProductRoutes);

app.use("/api/order", orderRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
