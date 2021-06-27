import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  snacks: null,
  brew: null,
  sweets: null,
};

export const snackSlice = createSlice({
  name: "snack",
  initialState,
  reducers: {
    setSnacks: (state, action) => {
      state.snacks = action.payload.snacks;
      state.brew = action.payload.brew;
      state.sweets = action.payload.sweets;
    },
  },
});
export const { setSnacks } = snackSlice.actions;
export const selectSnacks = (state) => state.snack.snacks;
export const selectBrew = (state) => state.snack.brew;
export const selectSweets = (state) => state.snack.sweets;

export default snackSlice.reducer;
