import { StaticLabelInput, StaticLabelSelect } from "@/components";
import { Flex, Form, Typography } from "antd";
import { useCouponInfoSectionStyles } from "./CouponInfoSectionStyles";

export const CouponInfoSection = () => {
  const { styles } = useCouponInfoSectionStyles();

  return (
    <Flex
      gap={18}
      vertical
    >
      <Typography.Paragraph>Coupon Information</Typography.Paragraph>
      <Form.Item
        name="active"
        rules={[{ required: true, message: "Please select coupon status" }]}
      >
        <StaticLabelSelect
          label="Coupon Status"
          id="active"
          options={[
            { label: "Active", value: "true" },
            { label: "Inactive", value: "false" },
          ]}
          placeholder="Status"
          className={styles.selectInput}
        />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Coupon name is required" }]}
      >
        <StaticLabelInput
          label="Coupon Name"
          id="name"
          placeholder="Name"
        />
      </Form.Item>

      <Form.Item
        name="type"
        rules={[{ required: true, message: "Please select coupon type" }]}
      >
        <StaticLabelSelect
          label="Type"
          id="type"
          placeholder="Type"
          options={[
            { label: "Cart Fixed", value: "cart_fixed" },
            { label: "Product Percent", value: "product_percent" },
            { label: "Product Fixed", value: "product_fixed" },
            { label: "Cart Percent", value: "cart_percent" },
          ]}
          className={styles.selectInput}
        />
      </Form.Item>
    </Flex>
  );
};
