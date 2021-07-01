import { createSlice } from "@reduxjs/toolkit";
let tray = [];
const initialState = {
  tray,
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCartSnacks: (state, action) => {
      console.log(action);
      switch (action.payload.type) {
        case "ADD_TO_CART":
          return { ...state, tray: [...state.tray, action.payload.item] };

        default:
          return { state };
      }
    },
    removeCartSnacks: (state, action)=>{
      //action
    }
  },
});
export const { setCartSnacks,removeCartSnacks } = orderSlice.actions;
export const selectCartSnacks = (state) => state.order.tray;
export default orderSlice.reducer;
