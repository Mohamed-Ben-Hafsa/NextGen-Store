import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import CategoryRoutes from "./Routes/categoryRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
import orderRoutes from "./Routes/orderRoutes.js";
import ProductRoutes from "./Routes/productRoutes.js";
import wishlistRoutes from "./Routes/wishlistRoutes.js";

import { errorHandler, notFound } from "./Middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 4000;
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://nextgen-store.onrender.com",
      "https://nextgen-store.netlify.app",
    ],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://nextgen-store.netlify.app"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.get("/", (req, res) => {
  console.log("Root route accessed");
  res.status(200).json({ message: "welcom to the Api " });
});

//Routes
app.use("/api/users", userRoutes);
app.use("/api/category", CategoryRoutes);
app.use("/api/product", ProductRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
