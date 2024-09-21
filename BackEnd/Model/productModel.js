import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  brand: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },

  isFeatured: {
    type: Boolean,
    default: false,
  },

  quantity: {
    type: Number,
    required: true,
    default: 1,
  },

  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
