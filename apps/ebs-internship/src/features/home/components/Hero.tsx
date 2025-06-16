import { Container } from "@/components";
import { Button, Flex, Image, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";
import { useStyles } from "@/styles";

const Hero = () => {
  const navigate = useNavigate();

  const { styles } = useStyles();

  return (
    <section style={{ paddingBlock: 40 }}>
      <Container>
        <Flex
          justify="space-between"
          align="center"
          gap={16}
        >
          <Flex
            style={{ maxWidth: 600 }}
            gap={16}
            vertical
          >
            <Typography.Title
              level={1}
              style={{ maxWidth: 483, fontWeight: 700 }}
            >
              Unlock Your Potential with Byway
            </Typography.Title>

            <Space
              size={24}
              direction="vertical"
            >
              <Typography.Paragraph className={styles.paragraph}>
                Welcome to Byway, where learning knows no bounds. We believe
                that education is the key to personal and professional growth,
                and we're here to guide you on your journey to success.
              </Typography.Paragraph>

              <Button
                variant="solid"
                color="blue"
                style={{ alignSelf: "start" }}
                onClick={() => navigate(RoutesEnum.SIGNUP)}
              >
                Start your instructor journey
              </Button>
            </Space>
          </Flex>

          <Flex align="center">
            <Image
              src="/images/persons/1.png"
              width={222}
              height={222}
              preview={false}
              alt=""
            />
            <Flex
              vertical
              gap={8}
            >
              <Image
                src="/images/persons/2.png"
                width={222}
                height={222}
                preview={false}
                alt=""
              />
              <Image
                src="/images/persons/3.png"
                width={222}
                preview={false}
                height={222}
                alt=""
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Hero;
