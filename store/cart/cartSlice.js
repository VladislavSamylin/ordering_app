import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    Sproducts: [],
    testNumberProducts: 0,
    visibleMinus: false,
  },
  reducers: {
    addProductToCart(state, action) {
      
      state.Sproducts.push(action.payload);
      state.testNumberProducts = state.testNumberProducts + 1;
      state.visibileMinus = true;
    },
    DeleteProductFromCart(state, action) {

    },
    TotalAmountProducts(state, action) {

    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;