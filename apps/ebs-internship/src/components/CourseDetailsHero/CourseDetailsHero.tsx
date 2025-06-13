import React from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Flex,
  Rate,
  Avatar,
  Tag,
} from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import Container from "../Container";
import { Breadcrumb } from "../Breadcrumb";
import styles from "./coursehero.module.scss";

const { Title, Paragraph, Text, Link } = Typography;

const HeroSection: React.FC = () => {
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Text>4.6</Text>
                  <Rate
                    className={styles.rate}
                    disabled
                    defaultValue={4.6}
                    allowHalf
                  />
                  <Text>(651651 rating)</Text>
                  <Text style={{ margin: "0 1rem" }}>|</Text>
                  <Text>22 Total Hours. 155 Lectures. All levels</Text>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Avatar
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    size={40}
                  />
                  <Text>Created by </Text>
                  <Link>Ronal Richards</Link>
                </div>
                <div style={{ marginTop: 8 }}>
                  <GlobalOutlined style={{ marginRight: 8 }} />
                  <Text>English, Spanish, Italian, German</Text>
                </div>
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
              <Title level={3}>
                $49.5{" "}
                <Text
                  delete
                  type="secondary"
                >
                  $99.5
                </Text>{" "}
                <Tag color="green">50% Off</Tag>
              </Title>
              <Button
                block
                style={{
                  marginBottom: 8,
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Add To Cart
              </Button>
              <Button block>Buy Now</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
