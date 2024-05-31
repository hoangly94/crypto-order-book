import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Spin } from "antd";
import { PublicContainer } from "./ui/containers/PublicContainer";
import { OrderBookLayout } from "./ui/layouts/OrderBookLayout";
import { orderBookRoutes } from "./ui/features/OrderBook";
import { rootLoader } from "./utils/helpers/router-loader.helper";

const publicRoutes: RouteObject[] = [
  {
    path: "",
    Component: OrderBookLayout,
    children: orderBookRoutes,
  },
];

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader: rootLoader,
    children: [
      {
        Component: PublicContainer,
        children: publicRoutes,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} fallbackElement={<Spin />} />;
};
