import { useCallback, useEffect, useRef, useState } from "react";
import { AlertCondition, OrderBookUpdate, TokenPrice24hr } from "@/models";
import { socket } from "./socketClient";

export const socketAPI = {
  useGet: (symbol: string) => {
    const [data, setData] = useState<OrderBookUpdate>();
    const oldSymbol = useRef("");

    useEffect(() => {
      const getOrderbookListener = (data: any) => {
        setData(JSON.parse(data));
      };
      socket.off(`orderBook/${oldSymbol.current}`, getOrderbookListener);
      oldSymbol.current = symbol;
      socket.on(`orderBook/${symbol}`, getOrderbookListener);
      return () => {
        socket.off(`orderBook/${oldSymbol.current}`, getOrderbookListener);
      };
    }, [symbol]);

    const isLoading = !data;

    return { data, isLoading };
  },
  usePostSymbol: () => {
    const request = useCallback((symbol: string) => {
      socket.emit("symbol", { symbol: symbol.toLowerCase() });
    }, []);

    return { request };
  },
  usePostAlertConditions: () => {
    const request = useCallback((conditions: AlertCondition[]) => {
      socket.emit("conditions", { conditions });
    }, []);

    return { request };
  },
  useGetAlert: (callback: (type: "bid" | "ask", message: string) => void) => {
    useEffect(() => {
      const getAlertListener = (rsp: any) => {
        const data = JSON.parse(rsp);
        callback(data.type, data.price);
      };

      socket.on(`alert`, getAlertListener);

      return () => {
        socket.off(`alert`, getAlertListener);
      };
    }, []);
  },
  usePrice24hr: () => {
    const [data, setData] = useState<TokenPrice24hr>();

    useEffect(() => {
      const getAlertListener = (rsp: any) => {
        const data = JSON.parse(rsp);
        setData(data);
      };

      socket.on("symbol/24hr", getAlertListener);

      return () => {
        socket.off("symbol/24hr", getAlertListener);
      };
    }, []);

    return { data };
  },
};
