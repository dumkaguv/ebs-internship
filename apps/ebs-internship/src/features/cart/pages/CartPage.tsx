import { Breadcrumb, Container, Section } from "@/components";
import { Flex, List, Spin, Typography } from "antd";
import { fetchCart } from "@/features/cart/api";
import { useQuery } from "@tanstack/react-query";
import {
  CartItem,
  OrderDetails,
  SkeletonCartItemList,
} from "@/features/cart/components";
import { useCartPageStyles } from "./CartPageStyles";
import { fetchCourses } from "@/services/courses";

export const CartPage = () => {
  const { data: cart, isPending } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  const coursesIds = cart?.items.map(
    ({ product }) => product.productables[0].productable_id
  );

  const { data: courses } = useQuery({
    queryKey: ["cartCourses", coursesIds],
    queryFn: () => fetchCourses({ ids: coursesIds, per_page: 100 }),
    enabled: !!coursesIds?.length,
  });

  const { styles } = useCartPageStyles();

  const coursesCount = cart?.items.length ?? 0;

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

          <Flex
            gap={70}
            justify="space-between"
          >
            <Flex
              vertical
              gap={40}
              className="w-full"
            >
              {isPending ? (
                <>
                  <Typography.Text className={styles.divider}>
                    <Spin size="small" /> Loading your cart...
                  </Typography.Text>
                  <SkeletonCartItemList />
                </>
              ) : coursesCount > 0 ? (
                <>
                  <Typography.Title
                    level={4}
                    className={styles.divider}
                  >
                    {coursesCount} {coursesCount === 1 ? "Course" : "Courses"}{" "}
                    in cart
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
                              (productable) =>
                                productable.productable_id === course.id
                            )
                          )}
                        />
                      </List.Item>
                    )}
                  />
                </>
              ) : (
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
              )}
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
