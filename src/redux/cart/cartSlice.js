import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addGood(state, action) {
      // console.log(action.payload);
      state.products.push(action.payload);
    },
    deleteGood(state, action) {
      console.log(action.payload);
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products.splice(index, 1);
    },
    clearProducts(state, action) {
      state.products = [];
    },
  },
});
export const { addGood, deleteGood, clearProducts } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
