import { Container, Section } from "@/components";
import { RoutesEnum } from "@/config/routesEnum";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Flex, Image, Typography } from "antd";
import { useBecomeInstructorPromoStyles } from "./BecomeInstructorPromoStyles";

export const BecomeInstructorPromo = () => {
  const { styles } = useBecomeInstructorPromoStyles();

  return (
    <Container>
      <Section>
        <Flex
          gap={60}
          vertical
        >
          <Flex
            justify="space-between"
            align="center"
            className={styles.wrapper}
          >
            <Image
              src="/images/persons/8.png"
              preview={false}
              alt=""
              loading="lazy"
              className={styles.image}
            />
            <Flex
              vertical
              gap={8}
            >
              <Typography.Title
                level={4}
                className={styles.title}
              >
                Become an Instructor
              </Typography.Title>
              <Flex
                gap={16}
                vertical
                align="start"
              >
                <Typography.Paragraph className={styles.description}>
                  Instructors from around the world teach millions of students
                  on Byway. We provide the tools and skills to teach what you
                  love.
                </Typography.Paragraph>
                <Button
                  type="primary"
                  href={RoutesEnum.PROFILE.BASE}
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Start Your Instructor Journey
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            className={styles.wrapper}
          >
            <Flex
              vertical
              gap={8}
            >
              <Typography.Title
                level={4}
                className={styles.title}
              >
                Transform your life through education
              </Typography.Title>
              <Flex
                vertical
                gap={16}
                align="start"
              >
                <Typography.Paragraph className={styles.description}>
                  Learners around the world are launching new careers, advancing
                  in their fields, and enriching their lives.
                </Typography.Paragraph>
                <Button
                  type="primary"
                  href={RoutesEnum.COURSES}
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Checkout Courses
                </Button>
              </Flex>
            </Flex>
            <Image
              src="/images/persons/9.png"
              preview={false}
              alt=""
              loading="lazy"
              className={styles.image}
            />
          </Flex>
        </Flex>
      </Section>
    </Container>
  );
};
