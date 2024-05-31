import { Button, Drawer, Flex, Form, InputNumber, message, Select } from "antd";
import S from "../order-book.styled";
import { BellOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { AlertConditionForm } from "@/models";
import { orderBookService } from "@/data/services";

export const TokenPriceAlert = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<AlertConditionForm>();
  const { request: postAlertConditions } =
    orderBookService.usePostAlertConditions();

  const onAlertDrawerOpen = () => {
    setOpen(true);
  };

  const onAlertClose = () => {
    setOpen(false);
  };

  const onFinish = (alertConditionForm: AlertConditionForm) => {
    const conditions = alertConditionForm.conditions.filter(
      (condition) => condition.price !== undefined,
    );
    postAlertConditions(conditions);
    message.success("Update alert conditions sucessfully");
    onAlertClose();
  };

  return (
    <Flex justify="flex-end">
      <Button
        type="primary"
        icon={<BellOutlined />}
        onClick={onAlertDrawerOpen}
        size="large"
      />
      <Drawer title="Token Price Alert" onClose={onAlertClose} open={open}>
        <Form
          name="token_price_condition"
          form={form}
          onFinish={onFinish}
          initialValues={{ items: [{}] }}
          autoComplete="off"
          {...{ labelCol: { span: 4 }, wrapperCol: { span: 14 } }}
        >
          <Form.List name="conditions">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Flex key={field.key} justify="space-between" gap={8}>
                    <Form.Item noStyle name={[field.name, "type"]}>
                      <Select
                        options={typeSelectOptions}
                        defaultValue="bid"
                        style={{ width: "100px" }}
                      />
                    </Form.Item>
                    <Form.Item noStyle name={[field.name, "price"]}>
                      <InputNumber style={{ flex: 1 }} placeholder="price" />
                    </Form.Item>
                    <CloseCircleOutlined onClick={() => remove(field.name)} />
                  </Flex>
                ))}

                <Button type="dashed" onClick={() => add()} block>
                  + Add New Condition
                </Button>
              </div>
            )}
          </Form.List>
          <br />
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form>
      </Drawer>
    </Flex>
  );
};

const typeSelectOptions = [
  {
    label: "Bid",
    value: "bid",
  },
  {
    label: "Ask",
    value: "ask",
  },
];
