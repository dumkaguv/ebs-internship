import { Row, Col, Card, Typography, Button, Flex, Rate, Avatar } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import Container from "../Container";
import { Breadcrumb } from "../Breadcrumb";
import styles from "./coursehero.module.scss";
import { FC } from "react";

const { Title, Paragraph, Text, Link } = Typography;

const HeroSection: FC = () => {
  return (
    <section className={styles.heroSection}>
      <Container>
        <Row
          gutter={[32, 32]}
          align="middle"
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
                Introduction to User Experience Design
              </Title>
              <Paragraph className={styles.customParagraph}>
                This course is meticulously crafted to provide you with a
                foundational understanding of the principles, methodologies, and
                tools that drive exceptional user experiences in the digital
                landscape.
              </Paragraph>
              <Flex
                vertical
                gap={24}
              >
                <Flex align="center">
                  <Text className={styles.rateNumber}>4.6</Text>
                  <Rate
                    className={styles.rate}
                    disabled
                    defaultValue={4.6}
                    allowHalf
                  />
                  <Text className={styles.customText}>(651651 rating)</Text>
                  <Text style={{ margin: "0 1rem" }}>|</Text>
                  <Text className={styles.customText}>
                    22 Total Hours. 155 Lectures. All levels
                  </Text>
                </Flex>

                <Flex
                  align="center"
                  gap={8}
                >
                  <Avatar
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    size={40}
                  />
                  <Text className={styles.customText}>Created by </Text>
                  <Link>Ronal Richards</Link>
                </Flex>

                <Flex align="center">
                  <GlobalOutlined style={{ marginRight: 8, fontSize: 24 }} />
                  <Text className={styles.customText}>
                    English, Spanish, Italian, German
                  </Text>
                </Flex>
              </Flex>
            </Typography>
          </Col>

          {/* Right Section */}
          <Col
            xs={24}
            md={8}
          >
            <Card
              cover={
                <img
                  alt="course"
                  src="https://user-images.githubusercontent.com/placeholder.jpg"
                  style={{ objectFit: "cover", height: 200 }}
                />
              }
            >
              <Title
                className={styles.cardTitle}
                level={3}
              >
                $49.5
                <Text
                  delete
                  type="secondary"
                  style={{ fontSize: 18 }}
                >
                  $99.5
                </Text>
                <Text className={styles.cardText}>50% Off</Text>
              </Title>
              <Button
                style={{ backgroundColor: "black", color: " white" }}
                className={styles.customButton}
                block
              >
                Add To Cart
              </Button>
              <Button
                style={{ borderBottom: "1px solid #E2E8F0" }}
                className={styles.customButton}
                block
              >
                Buy Now
              </Button>
              <div className="cardLine"></div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
