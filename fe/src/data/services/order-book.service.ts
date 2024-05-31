import { message } from "antd";
import { orderBookApi, socketAPI } from "../api";

export const orderBookService = {
  useGet: (symbol: string) => {
    const { data, ...rest } = socketAPI.useGet(symbol.toLowerCase());

    if (data) {
      data.b = data.b?.map(([p, q]: any) => [Number(p), Number(q)]);
      data.a = data.a?.map(([p, q]: any) => [Number(p), Number(q)]);
    }
    return { data, ...rest };
  },
  useSelectSymbol: () => {
    return socketAPI.usePostSymbol();
  },
  usePostAlertConditions: () => {
    return socketAPI.usePostAlertConditions();
  },
  useGetAlerts: () => {
    socketAPI.useGetAlert((type, msg) => {
      message.open({
        type: "warning",
        content: `${type} ${msg}`,
      });
    });
  },
  useGetSymbols: () => {
    return orderBookApi.useGetSymbolsQuery();
  },
  useGetPrice24hr: () => {
    return socketAPI.usePrice24hr();
  },
};
