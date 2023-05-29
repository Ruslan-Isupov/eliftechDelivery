import { createSlice } from "@reduxjs/toolkit";
import { addOrder } from "./submitOrderOperations";

const orderInitialState = {
  orderList: [],
  isLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const submitOrderSlice = createSlice({
  name: "submitOrder",
  initialState: orderInitialState,
  extraReducers: {
    [addOrder.fulfilled](state, action) {
      console.log("Post Malone");
      state.isLoading = false;
      state.error = null;
      // state.items.push(action.payload);
    },
  },
});

export const { addOrder } = submitOrderSlice.action;
export const contactsReducer = submitOrderSlice.reducer;
