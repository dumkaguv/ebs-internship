import { Flex, Form, Input, Radio, Typography, Image, DatePicker } from "antd";
import dayjs from "dayjs";
import { useMainInfoStyles } from "./MainInfoStyles";

const dateFormat = "DD.MM.YYYY";

export const MainInfo = () => {
  const { styles } = useMainInfoStyles();

  return (
    <Flex
      vertical
      gap={8}
      className={styles.container}
    >
      <Flex gap={16}>
        <Flex
          vertical
          gap={8}
          className="w-full"
        >
          <Form.Item
            name="country"
            label={<Typography.Title level={5}>Country</Typography.Title>}
            rules={[
              {
                required: true,
                message: "Please fill in your country",
              },
            ]}
          >
            <Input placeholder="Enter Country..." />
          </Form.Item>
        </Flex>
        <Flex
          vertical
          gap={8}
          className="w-full"
        >
          <Form.Item
            name="state"
            label={
              <Typography.Title level={5}>
                State/Union Territory
              </Typography.Title>
            }
            rules={[
              {
                required: true,
                message: "Please fill in your country",
              },
            ]}
          >
            <Input placeholder="Enter State..." />
          </Form.Item>
        </Flex>
      </Flex>

      <Typography.Title level={5}>Payment Method</Typography.Title>
      <Flex
        vertical
        gap={16}
        className={styles.paymentContainer}
      >
        <Flex
          justify="space-between"
          gap={24}
        >
          <Form.Item name="card">
            <Radio checked>
              <Typography.Title level={5}>Credit/Debit Card</Typography.Title>
            </Radio>
          </Form.Item>
          <Image
            src="/images/payments.png"
            width={72}
            height={28}
            preview={false}
            alt=""
          />
        </Flex>

        <Form.Item
          name="card_name"
          label={<Typography.Text>Name of Card</Typography.Text>}
          rules={[{ required: true, message: "Please fill in your name" }]}
        >
          <Input placeholder="Name of card" />
        </Form.Item>
        <Form.Item
          name="card_number"
          label={<Typography.Text>Card Number</Typography.Text>}
          rules={[
            {
              required: true,
              message: "Please fill in your card number",
            },
            {
              pattern: /^\d{16}$/,
              message: "Card number must be 16 digits",
            },
          ]}
        >
          <Input placeholder="1234 5678 9012 3456" />
        </Form.Item>
        <Flex gap={16}>
          <Form.Item
            name="card_expire"
            label={<Typography.Text>Expiry Date</Typography.Text>}
            rules={[{ required: true, message: "Please fill in expiry date" }]}
            className="w-full"
          >
            <DatePicker
              placeholder="Select expire date"
              minDate={dayjs(Date.now())}
              format={dateFormat}
              className="w-full"
            />
          </Form.Item>
          <Form.Item
            name="card_cvv"
            label={<Typography.Text>CVC/CVV</Typography.Text>}
            rules={[
              { required: true, message: "Please fill in CVC/CVV" },
              {
                pattern: /^\d{3,4}$/,
                message: "CVC must be 3 or 4 digits",
              },
            ]}
            className="w-full"
          >
            <Input
              placeholder="CVC/CVV"
              maxLength={4}
            />
          </Form.Item>
        </Flex>
      </Flex>
    </Flex>
  );
};
