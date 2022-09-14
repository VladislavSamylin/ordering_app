import { configureStore } from "@reduxjs/toolkit";
import React from "react";

import { productsReducer } from "./products/productsSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import { cartReducer } from "./cart/cartSlice";

const reducer = {
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
};

export const store = configureStore({
  reducer,
})