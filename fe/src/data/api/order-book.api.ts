import { apiUrl } from "@/constants";
import { MarketData } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderBookApi = createApi({
  reducerPath: "orderBookApi",
  tagTypes: ["OrderBook"],
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getSymbols: builder.query<string[][], void>({
      query: () => ({ method: "GET", url: "symbols" }),
      providesTags: ["OrderBook"],
    }),
    getTicker24h: builder.query<MarketData, string>({
      query: (symbol) => ({
        method: "GET",
        url: "ticker/24hr",
        params: { symbol },
      }),
      providesTags: ["OrderBook"],
    }),
  }),
});
