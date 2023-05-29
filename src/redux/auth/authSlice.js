import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMacMenu,
  fetchKFZ,
  fetchMonoPizza,
  fetchChelentano,
  fetchDominoz,
} from "./authOperations";

const initialStateUser = {
  goods: [],
  // price: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  state.error = action.payload;
};
const handleFullfield = (state, action) => {
  state.isLoggedIn = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateUser,
  extraReducers: {
    [fetchMacMenu.rejected]: handleRejected,
   
    [fetchMacMenu.fulfilled]: handleFullfield,
    [fetchKFZ.fulfilled](state, action) {
      state.goods = action.payload;
    
      state.isLoggedIn = true;
    },
    [fetchMonoPizza.fulfilled](state, action) {
      state.goods = action.payload;
     
      state.isLoggedIn = true;
    },
    [fetchChelentano.fulfilled](state, action) {
      state.goods = action.payload;
     
      state.isLoggedIn = true;
    },
    [fetchDominoz.fulfilled](state, action) {
      state.goods = action.payload;
      // state.price = action.payload.price;
      state.isLoggedIn = true;
    },
    
  },
});

export const authReducer = authSlice.reducer;
