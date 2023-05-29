import axios from "axios";
import Notiflix from "notiflix";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6473705cd784bccb4a3c9cc9.mockapi.io/";



export const fetchMacMenu = createAsyncThunk(
  "auth/fetchGoods",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/goods", {
        params: {
          p: 1,
          l: 10,
        },
      });
      // console.log(response.data);
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure("Bad Request! Try It again!");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchKFZ = createAsyncThunk(
  "auth/fetchGoods",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/goods", {
        params: {
          p: 2,
          l: 10,
        },
      });

      return response.data;
    } catch (e) {
      Notiflix.Notify.failure("Bad Request! Try It again!");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMonoPizza = createAsyncThunk(
  "auth/fetchGoods",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/goods", {
        params: {
          p: 3,
          l: 10,
        },
      });

      return response.data;
    } catch (e) {
      Notiflix.Notify.failure("Bad Request! Try It again!");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchChelentano = createAsyncThunk(
  "auth/fetchGoods",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/goods", {
        params: {
          p: 4,
          l: 10,
        },
      });

      return response.data;
    } catch (e) {
      Notiflix.Notify.failure("Bad Request! Try It again!");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDominoz = createAsyncThunk(
  "auth/fetchGoods",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/goods", {
        params: {
          p: 5,
          l: 10,
        },
      });

      return response.data;
    } catch (e) {
      Notiflix.Notify.failure("Bad Request! Try It again!");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
