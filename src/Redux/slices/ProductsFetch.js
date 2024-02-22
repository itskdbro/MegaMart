import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Url = "https://fakestoreapi.com/products";

export const ProductsFetch = createAsyncThunk("ProductsFetch", async () => {
  const res = await fetch(Url);
  return res.json();
});

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(ProductsFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(ProductsFetch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(ProductsFetch.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default ProductsSlice.reducer;
