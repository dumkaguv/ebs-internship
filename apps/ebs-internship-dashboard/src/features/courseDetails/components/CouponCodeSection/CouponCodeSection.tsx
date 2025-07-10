import { StaticLabelInput } from "@/components";
import { StaticLabelInputNumber } from "@/components/StaticLabelInputNumber";
import { Flex, Form, Typography } from "antd";

export const CouponCodeSection = () => {
  return (
    <Flex
      vertical
      gap={18}
    >
      <Typography.Paragraph>Coupon Code</Typography.Paragraph>
      <Form.Item
        name="code"
        rules={[{ required: true, message: "Coupon code is required" }]}
      >
        <StaticLabelInput
          label="Coupon Code"
          id="code"
          placeholder="Code..."
        />
      </Form.Item>
      <Form.Item
        name="limit_usage"
        rules={[{ required: true, message: "Coupon limit usage is required" }]}
      >
        <StaticLabelInputNumber
          label="Limit Usage"
          id="limit_usage"
          placeholder="Limit usage"
        />
      </Form.Item>
      <Form.Item
        name="limit_per_user"
        rules={[
          { required: true, message: "Coupon limit per user is required" },
        ]}
      >
        <StaticLabelInputNumber
          label="Limit Per User"
          id="limit_per_user"
          placeholder="Limit per user"
        />
      </Form.Item>
      <Form.Item
        name="min_cart_price"
        rules={[
          { required: true, message: "Coupon min cart price is required" },
        ]}
      >
        <StaticLabelInputNumber
          label="Min Cart Price"
          id="min_cart_price"
          placeholder="Min cart price"
        />
      </Form.Item>
      <Form.Item
        name="max_cart_price"
        rules={[
          { required: true, message: "Coupon max cart price is required" },
        ]}
      >
        <StaticLabelInputNumber
          label="Max Cart Price"
          id="max_cart_price"
          placeholder="Max cart price"
        />
      </Form.Item>
      <Form.Item
        name="amount"
        rules={[{ required: true, message: "Coupon amount is required" }]}
      >
        <StaticLabelInputNumber
          label="Amount"
          id="amount"
          placeholder="Amount"
        />
      </Form.Item>
    </Flex>
  );
};
