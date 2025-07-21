import { Breadcrumb, Container, Section } from "@/components";
import {
  CartItem,
  OrderDetails,
  SkeletonCartItemList,
} from "@/features/cart/components";
import { useCartPageStyles } from "./CartPageStyles";
import { fetchCourses } from "@/services/courses";
import { Flex, List, Spin, Typography } from "antd";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/services/apiClient";

export const CartPage = () => {
  const { data: cart, isPending } = useQuery({
    queryKey: ["cart"],
    queryFn: Api.cart.fetchCart,
  });

  const coursesIds = cart?.items?.map(
    ({ product }) => product.productables[0].productable_id
  );

  const { data: courses } = useQuery({
    queryKey: ["cartCourses", coursesIds],
    queryFn: () => fetchCourses({ ids: coursesIds, per_page: 100 }),
    enabled: !!coursesIds?.length,
  });

  const { styles } = useCartPageStyles();

  if (!cart || Object.keys(cart).length === 0) {
    return (
      <Flex
        justify="center"
        align="center"
        style={{ height: "100vh" }}
      >
        <Spin size="large" />
      </Flex>
    );
  }

  const renderCartContent = () => {
    const coursesCount = cart?.items?.length ?? 0;

    if (isPending) {
      return (
        <>
          <Typography.Text className={styles.divider}>
            <Spin size="small" /> Loading your cart...
          </Typography.Text>
          <SkeletonCartItemList />
        </>
      );
    }

    if (coursesCount > 0) {
      return (
        <>
          <Typography.Title
            level={4}
            className={styles.divider}
          >
            {coursesCount} {coursesCount === 1 ? "Course" : "Courses"} in cart
          </Typography.Title>
          <List
            dataSource={cart?.items}
            itemLayout="vertical"
            renderItem={(cartItem) => (
              <List.Item className={styles.listItem}>
                <CartItem
                  cartItem={cartItem}
                  course={courses?.data.find((course) =>
                    cartItem.product.productables.some(
                      (productable) => productable.productable_id === course.id
                    )
                  )}
                />
              </List.Item>
            )}
          />
        </>
      );
    }

    return (
      <Flex
        vertical
        gap={16}
      >
        <Typography.Title
          level={4}
          type="danger"
        >
          Your cart is empty
        </Typography.Title>
        <Typography.Text type="secondary">
          Add some courses to your cart and come back here.
        </Typography.Text>
      </Flex>
    );
  };

  return (
    <Container>
      <Section>
        <Flex
          vertical
          gap={32}
        >
          <Flex className={styles.title}>
            <Typography.Title level={2}>Shopping Cart</Typography.Title>
            <Breadcrumb title="Shopping Cart" />
          </Flex>

          <Flex
            gap={70}
            justify="space-between"
            className={styles.wrapper}
          >
            <Flex
              vertical
              gap={40}
              className="w-full"
            >
              {renderCartContent()}
            </Flex>

            <OrderDetails
              cart={cart}
              isPending={isPending}
            />
          </Flex>
        </Flex>
      </Section>
    </Container>
  );
};
