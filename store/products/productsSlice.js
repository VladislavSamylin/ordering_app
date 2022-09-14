import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  function(_, { rejectWithValue }) {
    const categories = ['молоко', 'мясо', 'хлебобулочные изделия'];

    try {
      return Promise.all(categories.map(category =>
        fetch(`https://rskrf.ru/rest/1/search/product?query=${category}`)))
        .then(responses => {
          if(!responses) {
            throw new Error('ServerError!');
          }
          return Promise.all(responses.map(res => res.json()))
        })
        .then((res) => res);
    } catch (error){
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
    error: null,
  },
  reducers: {
    addProductToCart(state, action) {},
    DeleteProductFromCart(state, action) {},
    TotalAmountProducts(state, action) {},
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;