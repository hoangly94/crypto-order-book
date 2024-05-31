import { TokenPriceTable } from "./TokenPriceTable";
import { Card, Col, Flex, Row, Typography } from "antd";
import S from "../order-book.styled";
import { TokenPriceAlert } from "./TokenPriceAlert";
import { SymbolSelect } from "../../shared/SymbolSelect";
import {
  OrderBookContext,
  useOrderBookContextValue,
} from "../order-book.context";
import { Ticker24h } from "./Ticker24h";

export const OrderBookContainer = () => {
  const orderbookContextValue = useOrderBookContextValue();
  const {
    state: { selectedSymbol, bidAskData },
    setters: { setSelectedSymbol },
  } = orderbookContextValue;

  return (
    <OrderBookContext.Provider value={orderbookContextValue}>
      <S.OrderBookContainer>
        <Card bordered={false}>
          <Row justify="space-between" align="middle" gutter={[8, 16]}>
            <Col span={24} sm={8}>
              <SymbolSelect
                defaultValue={selectedSymbol}
                onChange={setSelectedSymbol}
              />
            </Col>
            <Col span={18} sm={8}>
              {/* <Typography.Title title="Order book" level={4}>Order Book</Typography.Title> */}
              <Ticker24h />
            </Col>
            <Col span={6} sm={8}>
              <TokenPriceAlert />
            </Col>
          </Row>
          <Row justify="space-between" gutter={16}>
            {/* bids table */}
            <Col span={24} sm={12}>
              <TokenPriceTable type="bid" data={bidAskData?.b} />
            </Col>
            {/* asks table */}
            <Col span={24} sm={12}>
              <TokenPriceTable type="ask" data={bidAskData?.a} />
            </Col>
          </Row>
        </Card>
      </S.OrderBookContainer>
    </OrderBookContext.Provider>
  );
};
