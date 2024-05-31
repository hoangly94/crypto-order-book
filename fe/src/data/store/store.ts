import { configureStore } from "@reduxjs/toolkit";
import { rootMiddlewares, rootReducer } from "./reducer";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(rootMiddlewares),
});
setupListeners(store.dispatch);
type StoreType = typeof store;

export type AppDispatch = StoreType["dispatch"];
export type AppState = ReturnType<StoreType["getState"]>;
