import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productApi = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://rskrf.ru/rest/1/search/'}),
    endpoints: (build) => ({
      getProducts: build.query({
        query: (category) => `product?query=${category}`,
      }),
    }),
});

export const { useGetProductsQuery } = productApi;
