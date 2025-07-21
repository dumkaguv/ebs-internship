import { Layout, Typography, Space, Flex } from "antd";
import Image from "antd/es/image";
import { SocialIcons } from "@/components";
import { useFooterStyles } from "./FooterStyles";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";

const { Footer } = Layout;

const helpLinks = [
  { label: "Contact Us", to: "#" },
  { label: "Latest Article", to: "#" },
  { label: "FAQ", to: "#" },
];

const programLinks = [
  { label: "Art & Design", to: "#" },
  { label: "Business", to: "#" },
  { label: "IT & Software", to: "#" },
  { label: "Languages", to: "#" },
  { label: "Programming", to: "#" },
];

export const AppFooter = () => {
  const { styles } = useFooterStyles();

  return (
    <Footer className={styles.footer}>
      <Flex
        className={styles.footerContainer}
        justify="space-between"
        gap={32}
        wrap
      >
        <Flex
          className={styles.footerDescription}
          vertical
          gap={16}
        >
          <Link to={RoutesEnum.HOME}>
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
          </Link>
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
            {helpLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={styles.paragraph}
              >
                {link.label}
              </Link>
            ))}
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
            {programLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={styles.paragraph}
              >
                {link.label}
              </Link>
            ))}
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
              Address: 123 Main Street, Any town, CA 12345
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
