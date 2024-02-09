import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// `https://dummyjson.com/products?limit=${limit}&skip=${skip}`

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: `https://dummyjson.com/products` }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (fetchDetails) => `${fetchDetails}`,
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
