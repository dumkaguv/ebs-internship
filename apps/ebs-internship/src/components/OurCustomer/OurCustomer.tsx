import { Container } from "@/components/Container";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Flex, Typography } from "antd";
import { useOurCustomerStyles } from "./OurCustomerStyles";
import { useRef } from "react";

const ourCustomerMessage = [
  {
    message:
      '"Byway is tech courses are top-notch! As someone who is always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.',
    customerName: "Jane Doe",
    customerPosition: "Designer",
  },
  {
    message:
      '"Byway is tech courses are top-notch! As someone who is always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.',
    customerName: "Jane Doe",
    customerPosition: "Designer",
  },
  {
    message:
      '"Byway is tech courses are top-notch! As someone who is always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.',
    customerName: "Jane Doe",
    customerPosition: "Designer",
  },
  {
    message:
      '"Byway is tech courses are top-notch! As someone who is always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.',
    customerName: "Jane Doe",
    customerPosition: "Designer",
  },
  {
    message:
      '"Byway is tech courses are top-notch! As someone who is always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.',
    customerName: "Jane Doe",
    customerPosition: "Designer",
  },
  {
    message:
      '"Byway is tech courses are top-notch! As someone who is always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.',
    customerName: "Jane Doe",
    customerPosition: "Designer",
  },
];

export const OurCustomer = () => {
  const { styles } = useOurCustomerStyles();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });

  return (
    <Flex className={styles.backgroundContainer}>
      <Container className={styles.customerContainer}>
        <Flex justify="space-between">
          <Typography.Title level={3}>
            What Our Customer Say About Us
          </Typography.Title>
          <Flex gap={8}>
            <Button
              className={styles.button}
              block
              onClick={scrollLeft}
            >
              <LeftOutlined />
            </Button>
            <Button
              block
              className={styles.button}
              onClick={scrollRight}
            >
              <RightOutlined />
            </Button>
          </Flex>
        </Flex>
        <Flex
          ref={scrollRef}
          className={styles.carrousel}
        >
          {ourCustomerMessage.map((item, index) => (
            <Card
              className={styles.customerCard}
              key={index}
            >
              <img
                src="/icons/doubleQuotes.svg"
                alt="doubleQuotes"
              />
              <Typography.Paragraph>{item.message}</Typography.Paragraph>
              <Flex gap={8}>
                <Avatar
                  size={60}
                  src="/images/persons/4.png"
                />
                <Flex
                  vertical
                  justify="center"
                >
                  <Typography.Title level={5}>
                    {item.customerName}
                  </Typography.Title>
                  <Typography.Paragraph>
                    {item.customerPosition}
                  </Typography.Paragraph>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};
