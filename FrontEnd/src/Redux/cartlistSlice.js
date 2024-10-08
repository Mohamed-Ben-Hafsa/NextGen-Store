import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// Get USER Cart:

export const getAllCartlist = createAsyncThunk("/cartlist", async () => {
  axios.defaults.withCredentials = true;
  try {
    const { data } = await axios.get(
      "https://nextgen-store.onrender.com/api/cart/"
    );
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
});

// Add To cart

export const addProductToCartlist = createAsyncThunk(
  "/addToCartlist",
  async (id) => {
    axios.defaults.withCredentials = true;
    try {
      const { data } = await axios.post(
        `https://nextgen-store.onrender.com/api/cart/${id}`
      );
      toast.success("Added to cartlist");

      return data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
);

//Delete cart

export const deleteProductFromCartlist = createAsyncThunk(
  "/deleteFromCartlist",
  async (id) => {
    axios.defaults.withCredentials = true;
    try {
      const { data } = await axios.delete(
        `https://nextgen-store.onrender.com/api/cart/${id}`
      );
      toast.success("Deleted from Cartlist");
      return data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
);

export const clearCartlist = createAsyncThunk("/clearCartlist", async (id) => {
  axios.defaults.withCredentials = true;
  try {
    const { data } = await axios.delete(
      "https://nextgen-store.onrender.com/api/cart"
    );
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || "An error occurred");
    return rejectWithValue(error.response?.data);
  }
});

const cartlistSlice = createSlice({
  name: "cartlist",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCartlist.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllCartlist.fulfilled, (state, action) => {
      state.loading = false;
      state.allCartlistProducts = action.payload;
    });

    builder.addCase(getAllCartlist.rejected, (state) => {
      state.loading = false;
    });

    // ADD PRODUCT TO CARTLIST
    builder.addCase(addProductToCartlist.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addProductToCartlist.fulfilled, (state, action) => {
      state.loading = false;
      state.addedToCartlist = action.payload;
    });

    builder.addCase(addProductToCartlist.rejected, (state) => {
      state.loading = false;
    });

    //DELETE PRODUCT FROM CARTLIST
    builder.addCase(deleteProductFromCartlist.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteProductFromCartlist.fulfilled, (state, action) => {
      state.loading = false;
      state.deletedFromcartlist = action.payload;
    });

    builder.addCase(deleteProductFromCartlist.rejected, (state) => {
      state.loading = false;
    });

    //Clear cart :
    builder.addCase(clearCartlist.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(clearCartlist.fulfilled, (state, action) => {
      state.loading = false;
      state.clearFromcartlist = action.payload;
    });

    builder.addCase(clearCartlist.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default cartlistSlice.reducer;
