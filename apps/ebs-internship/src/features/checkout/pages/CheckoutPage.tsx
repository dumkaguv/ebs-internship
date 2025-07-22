import { Flex, Form, Grid, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { Breadcrumb, Container, Section } from "@/components";
import { MainInfo, OrderDetails } from "@/features/checkout/components";

const { useBreakpoint } = Grid;
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

  const screens = useBreakpoint();

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
            <Flex
              vertical={!screens.sm}
              gap={24}
            >
              <Typography.Title level={2}>Checkout Page</Typography.Title>
              <Breadcrumb title="Checkout" />
            </Flex>

            <Flex
              gap={40}
              vertical={!screens.lg}
            >
              <MainInfo />
              <OrderDetails form={form} />
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Form>
  );
};
