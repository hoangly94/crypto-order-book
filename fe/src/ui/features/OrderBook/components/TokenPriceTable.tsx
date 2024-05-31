import { Flex } from "antd";
import S from "../order-book.styled";
import {
  calculateTotalQuantity,
  formatTokenPrice,
  formatTokenQuantity,
} from "@/utils/helpers";

interface TokenPriceTable {
  type: "bid" | "ask";
  data?: [number, number][];
}

export const TokenPriceTable = ({ type, data }: TokenPriceTable) => {
  const totalQuantity = calculateTotalQuantity(data);
  return (
    <S.TokenPriceTable>
      <Flex justify="space-between">
        <div>{type} Price</div>
        <div>Quantity</div>
      </Flex>
      <div>
        {data?.map(([price, quantity]) => (
          <S.TokenPriceRow key={`${price}_${quantity}`} justify="space-between">
            <S.TokenPriceQuantity
              {...{ type, ratio: quantity / totalQuantity }}
            >
              {" "}
            </S.TokenPriceQuantity>
            <S.TokenPriceValue {...{ type }}>
              {formatTokenPrice(price)}
            </S.TokenPriceValue>
            <div>{formatTokenQuantity(quantity)}</div>
          </S.TokenPriceRow>
        ))}
      </div>
    </S.TokenPriceTable>
  );
};
