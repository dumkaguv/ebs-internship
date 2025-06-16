import { Row, Col, Card, Typography, Button, Flex, Avatar } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { Container } from "@/components";
import { Breadcrumb } from "@/components/Breadcrumb";
import styles from "./courseDetailsHero.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Course } from "@/types";
import { FC } from "react";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";

interface Props {
  data: Course;
}

const CourseDetailsHero: FC<Props> = ({ data }) => {
  const location = useLocation();

  return (
    <section className={styles.heroSection}>
      <Container>
        <Row
          gutter={[32, 32]}
          align="top"
        >
          <Col
            xs={24}
            md={16}
          >
            <Typography>
              <Breadcrumb
                location={location.pathname}
                title={data?.title}
              />

              <Typography.Title
                className={styles.customTitle}
                level={1}
              >
                {data?.title}
              </Typography.Title>
              <Typography.Paragraph className={styles.customParagraph}>
                {data?.description}
              </Typography.Paragraph>
              <Flex
                vertical
                gap={24}
              >
                <Flex align="center">
                  <Typography.Text className={styles.customText}>
                    {data?.duration} Total Hours. {data?.lessons?.length}{" "}
                    Lessons. {data?.level} Level
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
                  <Typography.Text className={styles.customText}>
                    Created by
                  </Typography.Text>
                  <Link
                    to={getRouteUrlById(RoutesEnum.MENTORS, data?.author_id)}
                  >
                    {data?.author?.first_name} {data?.author?.last_name}
                  </Link>
                </Flex>

                <Flex align="center">
                  <GlobalOutlined style={{ marginRight: 8, fontSize: 24 }} />
                  <Typography.Text className={styles.customText}>
                    Language: {data?.language}
                  </Typography.Text>
                </Flex>
              </Flex>
            </Typography>
          </Col>

          <Col
            xs={24}
            md={8}
          >
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
                ${data?.product?.price_old}
                <Typography.Text
                  delete
                  type="secondary"
                  style={{ fontSize: 18 }}
                >
                  $
                  {(data?.product?.price_old ?? 0) *
                    (1 + (data?.product?.tax_rate ?? 0) / 100)}
                </Typography.Text>
                <Typography.Text className={styles.cardText}>
                  {data?.product?.tax_rate}% Off
                </Typography.Text>
              </Typography.Title>
              <Button
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CourseDetailsHero;
