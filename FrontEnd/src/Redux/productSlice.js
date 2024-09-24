import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetFeaturedProduct = createAsyncThunk(
  "product/getfeatured/",
  async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.get(
        "https://nextgen-store.onrender.com/api/product/getfeatured/8"
      );
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

export const getAllProducts = createAsyncThunk("products", async () => {
  try {
    axios.defaults.withCredentials = true;
    const { data } = await axios.get(
      "https://nextgen-store.onrender.com/api/product/getAll"
    );
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const createProduct = createAsyncThunk(
  "product/create",
  async (product) => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        "https://nextgen-store.onrender.com/api/product/create",
        product
      );
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
  try {
    axios.defaults.withCredentials = true;
    const { data } = await axios.delete(
      `https://nextgen-store.onrender.com/api/product/delete//${id}`
    );
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const updateProduct = createAsyncThunk(
  "product/update",
  async ({ id, newTask }) => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.put(
        `https://nextgen-store.onrender.com/api/product/update/${id}`,
        newTask
      );
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
