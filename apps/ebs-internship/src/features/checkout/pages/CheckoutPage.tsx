import { Flex, Form, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { Breadcrumb, Container, Section } from "@/components";
import { MainInfo, OrderDetails } from "@/features/checkout/components";

export interface FormValues {
  country: string;
  state: string;
  cardName: string;
  cardNumber: string;
  expire: string;
  cvv: string;
}

export const CheckoutPage = () => {
  const [form] = useForm<FormValues>();

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
    >
      <Container>
        <Section>
          <Flex
            vertical
            gap={32}
          >
            <Flex gap={40}>
              <Typography.Title level={2}>Checkout Page</Typography.Title>
              <Breadcrumb title="Checkout" />
            </Flex>

            <Flex gap={40}>
              <MainInfo />
              <OrderDetails form={form} />
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Form>
  );
};
