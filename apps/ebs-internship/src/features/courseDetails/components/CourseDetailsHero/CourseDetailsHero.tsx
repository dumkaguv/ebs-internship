import { Card, Typography, Button, Flex, Avatar, Rate } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { Container, SocialIcons, ButtonAddToCart } from "@/components";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Course, IMAGE_FALLBACKS } from "@libs";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { useCourseDetailsHeroStyles } from "./CourseDetailsHeroStyles";

interface Props {
  data: Course;
}

export const CourseDetailsHero = ({ data }: Props) => {
  const { styles } = useCourseDetailsHeroStyles();

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
            gap={18}
          >
            <Typography.Title level={1}>
              {data?.title ?? "Introduction to User Experience Design"}
            </Typography.Title>
            <Typography.Paragraph>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    data?.description ??
                    "This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.",
                }}
              />
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
                src={IMAGE_FALLBACKS.USER}
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
              src={data.image_url ?? IMAGE_FALLBACKS.COURSE}
            />
            <Flex
              vertical
              gap={12}
            >
              {data?.product?.price !== 0 ? (
                <Flex
                  align="center"
                  gap={8}
                  className={styles.priceContainer}
                >
                  <Typography.Title level={3}>
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
                </Flex>
              ) : (
                <Typography.Title
                  className={styles.priceContainer}
                  level={3}
                >
                  Free
                </Typography.Title>
              )}
              <ButtonAddToCart
                productId={data.product.id}
                block
              />
              <Button
                className={styles.customButtonBuy}
                block
              >
                Buy Now
              </Button>
              <Typography.Paragraph>Share</Typography.Paragraph>
              <SocialIcons />
            </Flex>
          </Card>
        </Flex>
      </Container>
    </section>
  );
};
