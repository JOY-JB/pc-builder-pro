import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "api/products",
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
