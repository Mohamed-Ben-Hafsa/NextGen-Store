import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import categorySlice from "./categorySlice";
import wishlistSlice from "./wishlistSlice.js";
import cartlistSlice from "./cartlistSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    product: productReducer,
    category: categorySlice,
    wishlist: wishlistSlice,
    cartlist: cartlistSlice,
  },
  devTools: true,
});

export default store;
