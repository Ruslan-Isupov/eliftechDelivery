import axios from "axios";
import Notiflix from "notiflix";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6473705cd784bccb4a3c9cc9.mockapi.io/";

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

// export const register = createAsyncThunk(
//   `auth/register`,
//   async ({ name, email, password }, thunkApi) => {
//     try {
//       const response = await axios.post("/users/signup", {
//         name,
//         email,
//         password,
//       });
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (e) {
//       Notiflix.Notify.failure("Bad Request! Try more corresponding password!");
//       return thunkApi.rejectWithValue(e.message);
//     }
//   }
// );

// export const login = createAsyncThunk(
//   `auth/login`,
//   async ({ email, password }, thunkApi) => {
//     try {
//       const response = await axios.post("/users/login", {
//         email,
//         password,
//       });
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (e) {
//       Notiflix.Notify.failure("Bad Request! Try It again!");
//       return thunkApi.rejectWithValue(e.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk(`auth/logout`, async (_, thunkApi) => {
//   try {
//     const response = await axios.post("/users/logout");
//     clearAuthHeader();
//     return response.data;
//   } catch (e) {
//     Notiflix.Notify.failure("Bad Request! Try It again!");
//     return thunkApi.rejectWithValue(e.message);
//   }
// });

// export const refreshUser = createAsyncThunk(
//   `auth/refreshUser`,
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue("Can not find user");
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const response = await axios.get("/users/current");
//       return response.data;
//     } catch (error) {
//       Notiflix.Notify.failure("Bad Request! Try It again!");
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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
