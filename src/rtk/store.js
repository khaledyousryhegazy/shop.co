import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),
});
