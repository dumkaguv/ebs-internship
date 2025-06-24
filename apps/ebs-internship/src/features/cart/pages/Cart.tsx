import { Breadcrumb, Container, Section } from "@/components";
import { Flex, List, Typography } from "antd";
import { useLocation } from "react-router-dom";
import { fetchCart } from "../api/fetchCart";
import { useQuery } from "@tanstack/react-query";
import { CartItem } from "../components";

export const CartPage = () => {
  const location = useLocation();

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
            <Breadcrumb
              location={location.pathname}
              title="Shopping Cart"
            />
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
