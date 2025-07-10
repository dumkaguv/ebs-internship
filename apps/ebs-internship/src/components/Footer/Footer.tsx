import { Layout, Typography, Space, Flex } from "antd";
import Image from "antd/es/image";
import { SocialIcons } from "@/components";
import { useFooterStyles } from "./FooterStyles";
import { Link } from "react-router-dom";

const { Footer } = Layout;

export const AppFooter = () => {
  const { styles } = useFooterStyles();

  return (
    <Footer className={styles.footer}>
      <Flex
        className={styles.footerContainer}
        justify="space-between"
        gap={16}
      >
        <Flex
          className={styles.footerDescription}
          vertical
          gap={16}
        >
          <Flex
            align="center"
            gap={8}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={31}
              height={40}
              preview={false}
            />
            <Typography.Title
              className={styles.logoTitle}
              level={3}
            >
              Byway
            </Typography.Title>
          </Flex>
          <Typography.Paragraph className={styles.paragraph}>
            Empowering learners through accessible and engaging online
            education.
            <br />
            Byway is a leading online learning platform dedicated to providing
            high-quality, flexible, and affordable educational experiences.
          </Typography.Paragraph>
        </Flex>

        <Flex
          vertical
          gap={8}
        >
          <Typography.Title
            className={styles.title}
            level={5}
          >
            Get Help
          </Typography.Title>

          <Space
            direction="vertical"
            size="small"
          >
            <Link
              to={"#"}
              className={styles.paragraph}
            >
              Contact Us
            </Link>
            <Link
              to={"#"}
              className={styles.paragraph}
            >
              Latest Article
            </Link>
            <Link
              to={"#"}
              className={styles.paragraph}
            >
              FAQ
            </Link>
          </Space>
        </Flex>

        <Flex
          vertical
          gap={8}
        >
          <Typography.Title
            className={styles.title}
            level={5}
          >
            Programs
          </Typography.Title>
          <Space direction="vertical">
            <Link
              to={"#"}
              className={styles.paragraph}
            >
              Art & Design
            </Link>
            <Link
              to={"#"}
              className={styles.paragraph}
            >
              Business
            </Link>
            <Link
              to={"#"}
              className={styles.paragraph}
            >
              IT & Software
            </Link>
            <Link
              to={"#"}
              className={styles.paragraph}
            >
              Languages
            </Link>
            <Link
              to={"#"}
              className={styles.paragraph}
            >
              Programming
            </Link>
          </Space>
        </Flex>

        <Flex
          vertical
          gap={8}
        >
          <Typography.Title
            className={styles.title}
            level={5}
          >
            Contact Us
          </Typography.Title>
          <Space
            direction="vertical"
            size="small"
          >
            <Typography.Paragraph className={styles.paragraph}>
              Address: 123 Main Street, Anytown, CA 12345
            </Typography.Paragraph>

            <Typography.Link
              href="tel:+1234567890"
              className={styles.paragraph}
            >
              Tel: +(123) 456-7890
            </Typography.Link>

            <Typography.Link
              href="mailto:bywayedu@webkul.in"
              className={styles.paragraph}
            >
              Email: bywayedu@webkul.in
            </Typography.Link>
          </Space>

          <SocialIcons />
        </Flex>
      </Flex>
    </Footer>
  );
};
