import { Row, Col, Card, Typography, Button, Flex, Avatar } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { Container } from "@/components";
import { Breadcrumb } from "../../../../components/Breadcrumb";
import styles from "./coursehero.module.scss";
import { useQuery } from "@tanstack/react-query";
import { fetchCourseDetails } from "../../api/fetchCourseDetails";
import { useParams } from "react-router-dom";

const { Title, Paragraph, Text, Link } = Typography;

const HeroSection = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["courses"],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    queryFn: () => fetchCourseDetails(id!),
  });

  console.log(data);

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
              <Breadcrumb />
              <Title
                className={styles.customTitle}
                level={1}
              >
                {data?.title}
              </Title>
              <Paragraph className={styles.customParagraph}>
                {data?.description}
              </Paragraph>
              <Flex
                vertical
                gap={24}
              >
                <Flex align="center">
                  <Text className={styles.customText}>
                    {data?.duration} Total Hours. {data?.lessons.length}{" "}
                    Lessons. {data?.level} Level
                  </Text>
                </Flex>

                <Flex
                  align="center"
                  gap={8}
                >
                  <Avatar
                    src={data?.author?.url_avatar}
                    size={40}
                  />
                  <Text className={styles.customText}>Created by </Text>
                  <Link>
                    {data?.author?.first_name} {data?.author?.last_name}
                  </Link>
                </Flex>

                <Flex align="center">
                  <GlobalOutlined style={{ marginRight: 8, fontSize: 24 }} />
                  <Text className={styles.customText}>
                    Language: {data?.language}
                  </Text>
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
                src={data?.image_url}
              />
              <Title
                className={styles.cardTitle}
                level={3}
              >
                ${data?.product?.price_old}
                <Text
                  delete
                  type="secondary"
                  style={{ fontSize: 18 }}
                >
                  $
                  {(data?.product?.price_old ?? 0) *
                    (1 + (data?.product?.tax_rate ?? 0) / 100)}
                </Text>
                <Text className={styles.cardText}>
                  {data?.product?.tax_rate}% Off
                </Text>
              </Title>
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

export default HeroSection;
