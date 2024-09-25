import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// USER WISHLIST

export const getAllWishlist = createAsyncThunk("/wishlist", async () => {
  axios.defaults.withCredentials = true;
  try {
    const { data } = await axios.get(`http://localhost:5000/api/wishlist/`);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
});

export const addProductToWishlist = createAsyncThunk(
  "/addToWishlist",
  async (id) => {
    axios.defaults.withCredentials = true;
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/wishlist/${id}`
      );
      toast.success("Added to wishlist");

      return data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
);

export const deleteProductFromWishlist = createAsyncThunk(
  "/deleteFromWishlist",
  async (id) => {
    axios.defaults.withCredentials = true;
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/wishlist/${id}`
      );
      toast.success("Deleted from wishlist");
      return data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllWishlist.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.allWishlistProducts = action.payload;
    });

    builder.addCase(getAllWishlist.rejected, (state) => {
      state.loading = false;
    });

    // ADD PRODUCT TO WISHLIST
    builder.addCase(addProductToWishlist.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addProductToWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.addedToWishlist = action.payload;
    });

    builder.addCase(addProductToWishlist.rejected, (state) => {
      state.loading = false;
    });

    //DELETE PRODUCT FROM WISHLIST
    builder.addCase(deleteProductFromWishlist.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteProductFromWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.deletedFromWishlist = action.payload;
    });

    builder.addCase(deleteProductFromWishlist.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default wishlistSlice.reducer;
