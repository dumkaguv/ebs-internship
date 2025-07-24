import { Container } from "@/components";
import { Button, Flex, Image, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";
import { useStyles } from "@/styles";
import { useHeroStyles } from "./HeroStyles";

export const Hero = () => {
  const navigate = useNavigate();

  const { styles: globalStyles } = useStyles();
  const { styles } = useHeroStyles();

  return (
    <section className={styles.section}>
      <Container>
        <Flex
          justify="space-between"
          align="center"
          gap={16}
          className={styles.mainWrapper}
        >
          <Flex
            className={styles.wrapper}
            gap={16}
            vertical
          >
            <Typography.Title
              level={1}
              className={styles.title}
            >
              Unlock Your Potential with Byway
            </Typography.Title>

            <Space
              size={24}
              direction="vertical"
            >
              <Typography.Paragraph className={globalStyles.paragraph}>
                Welcome to Byway, where learning knows no bounds. We believe
                that education is the key to personal and professional growth,
                and we're here to guide you on your journey to success.
              </Typography.Paragraph>

              <Button
                variant="solid"
                color="blue"
                className={styles.heroButton}
                onClick={() => navigate(RoutesEnum.SIGNUP)}
              >
                Start your instructor journey
              </Button>
            </Space>
          </Flex>

          <Flex
            align="center"
            className={styles.imageWrapper}
          >
            <Image
              src="/images/persons/1.png"
              preview={false}
              alt=""
              className={styles.image}
            />
            <Flex
              vertical
              gap={8}
              className={styles.imageWrapperInner}
            >
              <Image
                src="/images/persons/2.png"
                preview={false}
                alt=""
                className={styles.image}
              />
              <Image
                src="/images/persons/3.png"
                preview={false}
                alt=""
                className={styles.image}
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};
