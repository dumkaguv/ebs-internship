import { Container, Section } from "@/components";
import { RoutesEnum } from "@/config/routesEnum";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Flex, Image, Typography } from "antd";

const BecomeInstructorPromo = () => {
  return (
    <Container>
      <Section>
        <Flex
          justify="space-between"
          align="center"
        >
          <Image
            src="/images/persons/8.png"
            preview={false}
            width={400}
            height={425}
            alt=""
            loading="lazy"
          />
          <Flex
            vertical
            gap={8}
          >
            <Typography.Title
              level={4}
              style={{ color: "black" }}
            >
              Become an Instructor
            </Typography.Title>
            <Flex
              gap={16}
              vertical
            >
              <Typography.Paragraph style={{ color: "#1D2939", maxWidth: 550 }}>
                Instructors from around the world teach millions of students on
                Byway. We provide the tools and skills to teach what you love.
              </Typography.Paragraph>
              <Button
                type="primary"
                href={RoutesEnum.PROFILE}
                style={{ width: "fit-content" }}
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
          style={{ marginTop: 60 }}
        >
          <Flex
            vertical
            gap={8}
          >
            <Typography.Title
              level={4}
              style={{ color: "black" }}
            >
              Transform your life through education
            </Typography.Title>
            <Flex
              vertical
              gap={16}
            >
              <Typography.Paragraph style={{ color: "#1D2939", maxWidth: 550 }}>
                Learners around the world are launching new careers, advancing
                in their fields, and enriching their lives.
              </Typography.Paragraph>
              <Button
                type="primary"
                href={RoutesEnum.COURSES}
                style={{ width: "fit-content" }}
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
            width={470}
            height={380}
            alt=""
            loading="lazy"
          />
        </Flex>
      </Section>
    </Container>
  );
};

export default BecomeInstructorPromo;
