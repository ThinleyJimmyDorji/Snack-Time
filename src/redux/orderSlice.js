import { createSlice } from "@reduxjs/toolkit";

// initial
const initialState = {
  tray: [],
};
// get total tray amount
export const getTrayTotal = (items) =>
  items?.reduce((amount, trayItem) => trayItem.price + amount, 0); // loop through items in tray and get the total amount.

//0 is the initial amount. returns amount
//create a slice
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCartSnacks: (state, action) => {
      console.log(action);
      switch (action.payload.type) {
        case "ADD_TO_CART":
          return { ...state, tray: [...state.tray, action.payload.item] }; // return whatever is there in the tray, as well as the new item

        // ***logic borrowed from clever programmer ***//
        case "REMOVE_FROM_CART":
          const index = state.tray.findIndex(
            //match the itemID in tray[] and locate its index in the array.
            //findIndex() loops through items in the array and
            //returns the index of the first element in an array that pass a test (provided as a function).
            (trayItem) => trayItem.id === action.payload.id
          );
          let newTray = [...state.tray]; //define new array so that the item at 'index' can be removed
          if (index >= 0) {
            // if such 'index' exists, remove 1 item from at 'index' using splice method.
            newTray.splice(index, 1);
          }
          return {
            // return the updated tray
            ...state,
            tray: newTray,
          };

        default:
          return { state };
      }
    },
    removeCartSnacks: (state, action) => {
      //action
    },
  },
});
export const { setCartSnacks, removeCartSnacks } = orderSlice.actions;
export const selectCartSnacks = (state) => state.order.tray;
export default orderSlice.reducer;
