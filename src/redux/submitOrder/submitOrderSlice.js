import { createSlice } from "@reduxjs/toolkit";
import { addOrder } from "./submitOrderOperations";

const orderInitialState = {
  orderList: [],
  isLoading: false,
  error: null,
};
// const handlePending = (state) => {
//   state.isLoading = true;
// };
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const submitOrderSlice = createSlice({
  name: "submitOrder",
  initialState: orderInitialState,
  extraReducers: {
    // [sentOrderList.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },

    [addOrder.fulfilled](state, action) {
      console.log("Post Malone");
      state.isLoading = false;
      state.error = null;
      // state.items.push(action.payload);
    },

    // [deleteContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     (contact) => contact.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // },
  },
});

export const { addOrder } = submitOrderSlice.action;
export const contactsReducer = submitOrderSlice.reducer;
