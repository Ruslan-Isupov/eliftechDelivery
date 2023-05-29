import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addGood(state, action) {
      console.log(state);
      console.log(action.payload);
      state.push(action.payload);
    },
  },
});
export const { addGood } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
