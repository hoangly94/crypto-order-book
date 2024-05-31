export interface OrderBookUpdate {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  U: number; // First update ID in event
  u: number; // Final update ID in event
  b: [number, number][]; // Bids, [price, quantity][]
  a: [number, number][]; // Asks, [price, quantity][]
}

export interface OrderBook {
  lastUpdateId: number; // Last update ID
  bids: [number, number][]; // Bids, [price, quantity][]
  asks: [number, number][]; // Asks, [price, quantity][]
}

export interface AlertCondition {
  type?: "bid" | "ask";
  price: number;
}

export interface AlertConditionForm {
  conditions: AlertCondition[];
}

export interface MarketData {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}

export interface TokenPrice24hr {
  priceChangePercent: number;
}
