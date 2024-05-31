import { Middleware } from "@reduxjs/toolkit";
import { orderBookApi } from "../api";

export const rootReducer = {
  [orderBookApi.reducerPath]: orderBookApi.reducer,
};

export const rootMiddlewares: Middleware[] = [orderBookApi.middleware];
