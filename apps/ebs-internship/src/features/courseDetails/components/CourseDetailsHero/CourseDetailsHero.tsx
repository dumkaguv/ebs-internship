import { Card, Typography, Button, Flex, Avatar, message } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { Container } from "@/components";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { Course } from "@/types";
import { FC } from "react";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { useCourseDetailsHeroStyles } from "./CourseDetailsHeroStyles";
import { useMutation } from "@tanstack/react-query";
import { addItemToCart } from "../../api/addItemToCart";

interface Props {
  data: Course;
  id: number;
}

const CourseDetailsHero: FC<Props> = ({ data, id }) => {
  const { styles } = useCourseDetailsHeroStyles();

  const location = useLocation();

  const { mutate, isPending } = useMutation<
    Course,
    Error,
    { id: number; quantity?: number }
  >({
    mutationFn: () => addItemToCart(data.product.id),

    onSuccess: () =>
      message.success(`Course ${data.title} added successfully to the cart!`),
    onError: () => message.error("Error occurred. Try again later."),
  });

  return (
    <section className={styles.heroSection}>
      <Container className={styles.heroContainer}>
        <Flex
          vertical
          gap={24}
          className={styles.leftSide}
        >
          <Breadcrumb
            location={location.pathname}
            title={data?.title}
          />

          <Flex vertical>
            <Typography.Title level={1}>{data?.title}</Typography.Title>
            <Typography.Paragraph>{data?.description}</Typography.Paragraph>
          </Flex>
          <Flex
            vertical
            gap={24}
          >
            <Flex align="center">
              <Typography.Text>
                {data?.duration ?? "0"} Total Hours. {data?.lessons?.length}{" "}
                Lessons. {data?.level ?? "0"} Level
              </Typography.Text>
            </Flex>

            <Flex
              align="center"
              gap={8}
            >
              <Avatar
                src={data?.author?.url_avatar}
                size={40}
              />
              <Typography.Text>Created by</Typography.Text>
              <Link to={getRouteUrlById(RoutesEnum.MENTORS, data?.author_id)}>
                {data?.author?.first_name} {data?.author?.last_name}
              </Link>
            </Flex>

            <Flex
              align="center"
              gap={8}
            >
              <GlobalOutlined size={24} />
              <Typography.Text>Language: {data?.language}</Typography.Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex className={styles.rightSide}>
          <Card className={styles.customCard}>
            <img
              className={styles.cardImg}
              alt="course"
              src={
                data?.image_url ??
                "https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png"
              }
            />
            <Typography.Title
              className={styles.cardTitle}
              level={3}
            >
              {data?.product?.price_old ? `$${data.product.price_old}` : "Free"}

              {data?.product?.price_old && (
                <>
                  <Typography.Text
                    delete
                    type="secondary"
                  >
                    $
                    {(data.product.price_old ?? 0) *
                      (1 + (data.product.tax_rate ?? 0) / 100)}
                  </Typography.Text>
                  <Typography.Text className={styles.rateText}>
                    {data?.product?.tax_rate}% Off
                  </Typography.Text>
                </>
              )}
            </Typography.Title>
            <Button
              onClick={() => mutate({ id })}
              loading={isPending}
              className={styles.customButtonAdd}
              block
            >
              Add To Cart
            </Button>
            <Button
              className={styles.customButtonBuy}
              block
            >
              Buy Now
            </Button>
          </Card>
        </Flex>
      </Container>
    </section>
  );
};

export default CourseDetailsHero;
