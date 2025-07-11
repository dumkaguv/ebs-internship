import { Card, Typography, Button, Flex, Avatar, message, Rate } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { Container, SocialIcons } from "@/components";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Course } from "@libs";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { useCourseDetailsHeroStyles } from "./CourseDetailsHeroStyles";
import { useMutation } from "@tanstack/react-query";
import { addItemToCart } from "@/features/courseDetails/api/addItemToCart";

interface Props {
  data: Course;
  id: number;
}

export const CourseDetailsHero = ({ data, id }: Props) => {
  const { styles } = useCourseDetailsHeroStyles();

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
          <Breadcrumb title={data?.title} />

          <Flex
            vertical
            gap={17}
          >
            <Typography.Title level={1}>
              {data?.title ?? "Introduction to User Experience Design"}
            </Typography.Title>
            <Typography.Paragraph>
              {data?.description ??
                "This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape."}
            </Typography.Paragraph>
          </Flex>
          <Flex
            className={styles.detailsContainer}
            vertical
            gap={24}
          >
            <Flex
              align="center"
              gap={12}
            >
              <Flex
                align="center"
                gap={4}
              >
                <Typography.Paragraph className={styles.rateNumber}>
                  4.6
                </Typography.Paragraph>
                <Rate
                  disabled
                  defaultValue={5}
                  className={styles.rate}
                />
                <Typography.Paragraph>(651651 rating)</Typography.Paragraph>
              </Flex>

              <div className={styles.line}></div>

              <Typography.Paragraph>
                {data?.duration ?? "22"} Total Hours. {data?.lessons?.length}{" "}
                Lectures. {data?.level?.toLocaleUpperCase() ?? "All"} Level
              </Typography.Paragraph>
            </Flex>

            <Flex
              align="center"
              gap={8}
            >
              <Avatar
                src={
                  data?.author?.url_avatar ??
                  "https://wellms-multidomain-demo.s3.pl-waw.scw.cloud/avatars/2/avatar.png"
                }
                size={45}
              />
              <Typography.Paragraph>Created by</Typography.Paragraph>
              <Link to={getRouteUrlById(RoutesEnum.MENTORS, data?.author_id)}>
                {data?.author?.first_name} {data?.author?.last_name}
              </Link>
            </Flex>

            <Flex
              align="center"
              gap={8}
            >
              <GlobalOutlined className={styles.globalIcon} />
              <Typography.Text>
                Language: {data.language?.toLocaleUpperCase() ?? "English"}
              </Typography.Text>
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
            <Flex
              align="center"
              gap={13}
            >
              {data?.product?.price !== 0 ? (
                <>
                  <Typography.Title
                    className={styles.cardTitle}
                    level={3}
                  >
                    ${data?.product?.price}
                  </Typography.Title>
                  <Typography.Text
                    delete
                    type="secondary"
                  >
                    ${data?.product?.price_old ?? 0}
                  </Typography.Text>
                  <Typography.Text className={styles.rateText}>
                    {data?.product?.tax_rate}% Off
                  </Typography.Text>
                </>
              ) : (
                <Typography.Title
                  className={styles.cardTitle}
                  level={3}
                >
                  Free
                </Typography.Title>
              )}
            </Flex>
            <Flex
              vertical
              gap={16}
            >
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
            </Flex>
            <div className={styles.cardLine}></div>
            <Flex
              vertical
              gap={8}
            >
              <Typography.Paragraph style={{ margin: 0 }}>
                Share
              </Typography.Paragraph>
              <SocialIcons />
            </Flex>
          </Card>
        </Flex>
      </Container>
    </section>
  );
};
