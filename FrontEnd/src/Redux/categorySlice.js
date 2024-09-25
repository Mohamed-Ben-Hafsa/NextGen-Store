import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//get all categories

export const getAllCategories = createAsyncThunk("/category", async () => {
  axios.defaults.withCredentials = true;
  try {
    const { data } = await axios.get(
      "https://nextgen-store.onrender.com/api/category/getAll"
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
});

const categorySlice = createSlice({
  name: "category",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.allCatagories = action.payload;
    });
    builder.addCase(getAllCategories.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default categorySlice.reducer;
