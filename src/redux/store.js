import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import snacksReducer from "./snackSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    snack: snacksReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
