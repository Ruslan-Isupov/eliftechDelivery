import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addGood(state, action) {
      console.log(action.payload);
      state.products.push(action.payload);
    },
  },
});
export const { addGood } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
