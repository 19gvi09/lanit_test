import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import { loginApiSlice } from "./loginApi";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [loginApiSlice.reducerPath]: loginApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware).concat(loginApiSlice.middleware)
})