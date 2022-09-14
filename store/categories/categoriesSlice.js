import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  category: 'Всё',
  categories: [
    {
      key: 1,
      value: 'Всё',
      nameSvg: false,
    },
    {
      key: 2,
      value: 'Молоко',
      nameSvg: 'beer-outline',
    },
    {
      key: 3,
      value: 'Выпечка',
      nameSvg: 'baguette',
    },
    {
      key: 4,
      value: 'Мясо',
      nameSvg: 'food-steak',
    },
  ]
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
