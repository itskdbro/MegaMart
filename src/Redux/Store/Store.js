import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/CartSlice";
import ProductsSlice from "../slices/ProductsFetch";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductsSlice,
  },
});
