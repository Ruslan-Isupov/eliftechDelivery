import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addGood(state, action) {
      const sameId = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (sameId !== undefined) {
        return;
      } else {
        state.products.push(action.payload);
      }
    },
    deleteGood(state, action) {
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
