import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchItem: "",
  cartItems: [],
  products: {},
  productDetails: {},
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.cartItems.push(action.payload);
      console.log(state.cartItems);
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    search: (state, action) => {
      state.searchItem = action.payload;
    },
    addproduct: (state, action) => {
      state.products = action.payload;
    },
    addProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const { add, remove, search, addproduct, addProductDetails } =
  CartSlice.actions;
export default CartSlice.reducer;
