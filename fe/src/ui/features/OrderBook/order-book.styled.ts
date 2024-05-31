import { Button, Flex, Row, Typography } from "antd";
import styled from "styled-components";

const OrderBookContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 100%;
  & > * {
    width: 600px;
    max-width: 100%;
    max-height: 96vh;
    overflow: auto;
    margin-top: 16px;
  }
`;

const TokenPriceBox = styled(Row)`
  background-color: #00000044;
  padding: 16px 8px;
  border-radius: 8px;
`;

const OrderBookIconWrapper = styled(Flex)`
  margin-top: 16px;
  & > span {
    border: 1px solid #888;
    border-radius: 50%;
    padding: 8px;
  }
`;

const TokenPrice = styled(Typography.Text)`
  font-size: 10px;
  color: #888;
  padding-left: 10px;
`;

const OrderBookButton = styled(Button)`
  background: url(https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg)
    no-repeat center / cover;
  margin-top: 30px;
  color: #444;
  font-weight: bold;
`;

const TokenPriceTable = styled.div`
  width: 100%;
  & > * {
    padding: 8px 24px;
    border-radius: 4px;
  }
  & > *:first-child {
    font-weight: bold;
    font-size: 16px;
    text-transform: capitalize;
    /* border-bottom: 1px solid #fff; */
  }
  & > *:last-child {
    background-color: #00000044;
    height: 50vh;
    overflow: hidden auto;
  }
`;

const TokenPriceValue = styled.div.attrs((props: any) => ({
  style: {
    color: props["type"] === "bid" ? "red" : "green",
  },
}))``;

const TokenPriceRow = styled(Flex)`
  position: relative;
  z-index: 1;
`;

const TokenPriceQuantity = styled.div.attrs((props: any) => ({
  style: {
    width: `${props["ratio"] * 100}%`,
    background: `linear-gradient(90deg, ${props["type"] === "bid" ? "#ff000061" : "#1bff0061"} 0%, ${props["type"] === "bid" ? "#ff0000cc" : "#0eff00cc"} 100%)`,
  },
}))`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: -1;
`;

const TokenPrice24hrChange = styled.div.attrs((props) => ({
  style: {
    color: props.children ? "green" : "red",
  },
}))`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export default {
  OrderBookContainer,
  TokenPriceBox,
  OrderBookIconWrapper,
  TokenPrice,
  OrderBookButton,
  TokenPriceTable,
  TokenPriceValue,
  TokenPriceRow,
  TokenPriceQuantity,
  TokenPrice24hrChange,
};
