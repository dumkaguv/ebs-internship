import {
  Button,
  Flex,
  FormInstance,
  Image,
  List,
  message,
  Typography,
} from "antd";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCart } from "@/services/cart";
import { fetchCourses } from "@/services/courses";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { FormValues } from "@/features/checkout/pages/CheckoutPage";
import { useOrderDetailsStyles } from "./OrderDetailsStyles";
import { OrderDetailsCourseSkeletonList } from "./OrderDetailsCourseSkeletonList";

interface Props {
  form: FormInstance<FormValues>;
}

export const OrderDetails = ({ form }: Props) => {
  const { data: cart, isPending: isPendingCart } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  const coursesIds = cart?.items?.map(
    ({ product }) => product.productables[0].productable_id
  );

  const { data: coursesData, isPending: isPendingCourses } = useQuery({
    queryKey: ["cartCourses", coursesIds],
    queryFn: () => fetchCourses({ ids: coursesIds, per_page: 100 }),
    enabled: !!coursesIds?.length,
  });

  const { styles } = useOrderDetailsStyles({ isPendingCart });

  const courses = coursesData?.data;

  const onSubmit = async () => {
    try {
      await form.validateFields();
      // Api call...
    } catch (e) {
      message.error("Please fill in all required fields");
      console.log(e);
    }
  };

  return (
    <Flex
      vertical
      gap={16}
      className={styles.container}
    >
      <Typography.Title level={4}>Order Details</Typography.Title>
      <Flex className={styles.card}>
        {isPendingCourses ? (
          <OrderDetailsCourseSkeletonList />
        ) : (
          <List
            dataSource={courses}
            grid={{ gutter: [0, 12] }}
            loading={isPendingCourses}
            renderItem={(course) => (
              <List.Item>
                <Flex gap={8}>
                  <Link to={getRouteUrlById(RoutesEnum.COURSES, course.id)}>
                    <Image
                      src={course.image_url}
                      width={131}
                      height={131}
                      alt={course.title}
                      preview={false}
                    />
                  </Link>
                  <Flex
                    vertical
                    gap={4}
                  >
                    <Typography.Title
                      ellipsis={{ rows: 3 }}
                      level={5}
                    >
                      {course.title}
                    </Typography.Title>
                    <Typography.Text>
                      {course.lessons?.length ?? 0} Lectures. {course.duration}{" "}
                      Total Hours
                    </Typography.Text>
                    <Typography.Title level={5}>
                      ${course.product.price?.toFixed(2) ?? 0}
                    </Typography.Title>
                  </Flex>
                </Flex>
              </List.Item>
            )}
          />
        )}
      </Flex>
      <Flex className={styles.card}>
        <Flex
          gap={16}
          vertical
          className="w-full"
        >
          <Flex
            justify="space-between"
            align="center"
            gap={24}
          >
            <Typography.Text>Price</Typography.Text>
            <Typography.Title level={5}>
              ${cart?.total.toFixed(2)}
            </Typography.Title>
          </Flex>

          {cart?.additional_discount ? (
            <Flex
              justify="space-between"
              align="center"
              gap={24}
            >
              <Typography.Text>Discount</Typography.Text>
              <Typography.Title level={5}>
                -${cart?.additional_discount.toFixed(2)}
              </Typography.Title>
            </Flex>
          ) : null}

          <Flex
            justify="space-between"
            align="center"
            gap={24}
          >
            <Typography.Text>Tax</Typography.Text>
            <Typography.Title level={5}>
              ${cart?.tax.toFixed(2)}
            </Typography.Title>
          </Flex>

          <Flex
            justify="space-between"
            align="center"
            gap={24}
            className={styles.totalPrice}
          >
            <Typography.Title level={4}>Total</Typography.Title>
            <Typography.Title level={4}>
              ${cart?.total_with_tax.toFixed(2)}
            </Typography.Title>
          </Flex>
        </Flex>
      </Flex>
      <Button
        onClick={onSubmit}
        htmlType="submit"
        type="primary"
      >
        Proceed to Checkout
      </Button>
    </Flex>
  );
};
