import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import snacksReducer from "./snackSlice";
import orderReducer from "./orderSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    snack: snacksReducer,
    order: orderReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
