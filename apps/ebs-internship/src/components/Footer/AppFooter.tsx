import { Layout, Col, Typography, Space, Flex, Row } from "antd";
import Image from "antd/es/image";
import classes from "./footer.module.scss";
import SocialIcons from "../SocialIcons/SocialIcons";

const { Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer className={classes.customFooter}>
      <div className={classes.footerContainer}>
        <Row
          justify="space-between"
          gutter={[32, 32]}
        >
          <Col
            xs={24}
            sm={12}
            md={8}
          >
            <Space direction="vertical">
              <Flex
                align="center"
                gap={8}
              >
                <Image
                  src="/logo(1).png"
                  alt="Logo"
                  width={31}
                  height={40}
                  preview={false}
                />
                <Title
                  style={{
                    color: "#f1f5f9",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 24,
                    fontWeight: 600,
                  }}
                  level={3}
                >
                  Byway
                </Title>
              </Flex>
              <Paragraph className={classes.customText}>
                Empowering learners through accessible and engaging online
                education. Byway is a leading online learning platform dedicated
                to providing high-quality, flexible, and affordable educational
                experiences.
              </Paragraph>
            </Space>
          </Col>

          <Col
            xs={24}
            sm={12}
            md={4}
            lg={3}
          >
            <Title
              level={5}
              style={{
                color: "#f1f5f9",
                fontFamily: "Inter, sans-serif",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Get Help
            </Title>
            <Space direction="vertical">
              <Text className={classes.customText}>Contact Us</Text>
              <Text className={classes.customText}>Latest Article</Text>
              <Text className={classes.customText}>FAQ</Text>
            </Space>
          </Col>

          <Col
            xs={24}
            sm={12}
            md={4}
            lg={3}
          >
            <Title
              level={5}
              style={{
                color: "#f1f5f9",
                fontFamily: "Inter, sans-serif",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Programs
            </Title>
            <Space direction="vertical">
              <Text className={classes.customText}>Art & Design</Text>
              <Text className={classes.customText}>Business</Text>
              <Text className={classes.customText}>IT & Software</Text>
              <Text className={classes.customText}>Languages</Text>
              <Text className={classes.customText}>Programming</Text>
            </Space>
          </Col>

          <Col
            xs={24}
            sm={12}
            md={24}
            lg={24}
            xl={6}
          >
            <Title
              level={5}
              style={{
                color: "#f1f5f9",
                fontFamily: "Inter, sans-serif",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Contact Us
            </Title>
            <Space direction="vertical">
              <Text className={classes.customText}>
                Address: 123 Main Street, Anytown, CA 12345
              </Text>
              <Text className={classes.customText}>Tel: +(123) 456-7890</Text>
              <Text className={classes.customText}>
                Email: bywayedu@webkul.in
              </Text>
            </Space>

            <SocialIcons />
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default AppFooter;
