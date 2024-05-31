import { RouteObject } from "react-router-dom";
import { OrderBook } from ".";

export const orderBookRoutes: RouteObject[] = [
  {
    id: "order-book",
    path: "",
    element: <OrderBook />,
  },
];
