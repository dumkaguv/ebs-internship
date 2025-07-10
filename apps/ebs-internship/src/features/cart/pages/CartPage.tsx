import { Breadcrumb, Container, Section } from "@/components";
import { Flex, List, Typography } from "antd";
import { fetchCart } from "@/features/cart/api";
import { useQuery } from "@tanstack/react-query";
import { CartItem } from "@/features/cart/components";

export const CartPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  return (
    <Container>
      <Section>
        <Flex
          vertical
          gap={32}
        >
          <Flex gap={40}>
            <Typography.Title level={2}>Shopping Cart</Typography.Title>
            <Breadcrumb title="Shopping Cart" />
          </Flex>
          <Typography.Text>{data?.items?.length}</Typography.Text>
          <List
            dataSource={data?.items}
            loading={isLoading}
            renderItem={(item) => (
              <List.Item>
                <CartItem cartItem={item} />
              </List.Item>
            )}
          />
        </Flex>
      </Section>
    </Container>
  );
};
