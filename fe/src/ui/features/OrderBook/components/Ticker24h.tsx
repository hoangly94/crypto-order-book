import { orderBookService } from "@/data/services";
import S from "../order-book.styled";
import { Flex, Spin, Typography } from "antd";

export const Ticker24h = () => {
  const { data } = orderBookService.useGetPrice24hr();
  const priceChangePercent = data?.priceChangePercent.toFixed(2);

  return (
    <Flex gap={8} align="center">
      <Typography.Title level={5}>24h:</Typography.Title>
      {priceChangePercent ? (
        <S.TokenPrice24hrChange>{`${priceChangePercent}%`}</S.TokenPrice24hrChange>
      ) : (
        <Spin />
      )}
    </Flex>
  );
};
