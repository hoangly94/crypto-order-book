import { defaultSymbol } from "@/constants";
import { orderBookService } from "@/data/services";
import { createContext, useContext, useMemo, useState } from "react";

export const useOrderBookContextValue = () => {
  const { request: selectSymbol } = orderBookService.useSelectSymbol();
  const [selectedSymbol, setSelectedSymbol] = useState(defaultSymbol);
  const { data: bidAskData } = orderBookService.useGet(selectedSymbol);

  orderBookService.useGetAlerts();

  // useEffect(() => {
  //   setters.setPayToken(form.getFieldValue('payToken'))
  //   setters.setReceiveToken(form.getFieldValue('receiveToken'))
  // }, [balances])

  const setters = useMemo(
    () => ({
      setSelectedSymbol: (symbol: string) => {
        selectSymbol(symbol);
        setSelectedSymbol(symbol);
      },
    }),
    [],
  );

  return {
    state: {
      selectedSymbol,
      bidAskData,
    },
    setters,
  };
};

type OrderBookContextType = ReturnType<typeof useOrderBookContextValue>;

export const OrderBookContext = createContext({} as OrderBookContextType);

export const useOrderBookContext = () => {
  return useContext(OrderBookContext);
};
