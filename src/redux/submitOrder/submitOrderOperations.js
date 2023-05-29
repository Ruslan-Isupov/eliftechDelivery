import axios from "axios";
import Notiflix from "notiflix";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64749bc27de100807b1b59c8.mockapi.io/";

// export const fetchContacts = createAsyncThunk(
//   "submitForm/OrderList",
//   async (_, thunkApi) => {
//     try {
//       const response = await axios.get("/contacts");
//       return response.data;
//     } catch (e) {
//       Notiflix.Notify.failure("Bad Request! Try It again!");
//       return thunkApi.rejectWithValue(e.message);
//     }
//   }
// );

export const addOrder = createAsyncThunk(
  "submitForm/addOrderList",
  async (
    { name, number, adress, email, dishName, amount, totalPrice },
    thunkApi
  ) => {
    try {
      const response = await axios.post("/orders", {
        name,
        number,
        adress,
        email,
        dishName,
        amount,
        totalPrice,
      });
      console.log("Yep");
      return Notiflix.Notify.success("Successful order");
    } catch (e) {
      Notiflix.Notify.failure("Bad Request! Try It again!");
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkApi) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (e) {
//       Notiflix.Notify.failure("Bad Request! Try It again!");
//       return thunkApi.rejectWithValue(e.message);
//     }
//   }
// );
