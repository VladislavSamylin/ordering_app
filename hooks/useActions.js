import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { productsActions } from "../store/products/productsSlice";
import { categoriesActions } from "../store/categories/categoriesSlice";

const allActions = {
  ...productsActions,
  ...categoriesActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
}