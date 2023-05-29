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
    // [login.rejected]: handleRejected,
    // [logOut.rejected]: handleRejected,

    [fetchMacMenu.fulfilled]: handleFullfield,
    [fetchKFZ.fulfilled](state, action) {
      state.goods = action.payload;
      // state.price = action.payload.price;
      state.isLoggedIn = true;
    },
    [fetchMonoPizza.fulfilled](state, action) {
      state.goods = action.payload;
      // state.price = action.payload.price;
      state.isLoggedIn = true;
    },
    [fetchChelentano.fulfilled](state, action) {
      state.goods = action.payload;
      // state.price = action.payload.price;
      state.isLoggedIn = true;
    },
    [fetchDominoz.fulfilled](state, action) {
      state.goods = action.payload;
      // state.price = action.payload.price;
      state.isLoggedIn = true;
    },
    // [login.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },

    // [logOut.fulfilled](state, action) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },
    // [refreshUser.pending](state) {
    //   state.isRefreshing = true;
    // },
    // [refreshUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // },
    // [refreshUser.rejected](state) {
    //   state.isRefreshing = false;
    // },
  },
});

export const authReducer = authSlice.reducer;
