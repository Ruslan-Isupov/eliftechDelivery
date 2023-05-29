import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cartSlice";
// import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from "./auth/authSlice";

import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "cart",
  storage,
  blacklist: ["goods"],
};

export const store = configureStore({
  reducer: {
    cart: persistReducer(persistConfig, cartReducer),
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
