import { Form, Image, Select } from "antd";
import S from "./token-select.styled";
import { orderBookService } from "@/data/services";
import { tokenIconFallbackPath, tokenIconPath } from "@/constants";
import { useEffect } from "react";

interface SymbolSelectProps {
  name?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const SymbolSelect = ({
  name,
  defaultValue,
  onChange,
}: SymbolSelectProps) => {
  const { data, isLoading } = orderBookService.useGetSymbols();

  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  useEffect(() => {
    if (defaultValue) {
      onChange?.(defaultValue);
    }
  }, []);

  return (
    <S.SelectedSymbol>
      <Form.Item name={name}>
        <Select
          showSearch
          placeholder="Select token"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={filterOption}
          loading={isLoading}
          size="large"
          defaultValue={defaultValue}
        >
          {data?.map(([baseSymbol, quotation]) => {
            const symbol = `${baseSymbol}${quotation}`;
            return (
              <Select.Option key={symbol} label={symbol}>
                <S.SelectOptionContent align="center">
                  <Image
                    preview={false}
                    loading="lazy"
                    fallback={tokenIconFallbackPath}
                    src={`${tokenIconPath}${baseSymbol}.svg`}
                  />
                  <span style={{ marginLeft: 8 }}>{symbol}</span>
                </S.SelectOptionContent>
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </S.SelectedSymbol>
  );
};
