import { Container } from "@/components";
import { Button, Flex, Image, Typography } from "antd";
import styles from "./hero.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";

const { Title, Paragraph } = Typography;

function Hero() {
  const navigate = useNavigate();
  return (
    <section className={styles.hero}>
      <Container>
        <Flex
          justify="space-between"
          align="center"
          gap={16}
        >
          <Flex
            style={{ maxWidth: 600 }}
            vertical
          >
            <Title
              level={2}
              style={{ maxWidth: 483, fontSize: 40, fontWeight: 700 }}
              className={styles.heroTitle}
            >
              Unlock Your Potential with Byway
            </Title>

            <Paragraph className={styles.heroDescription}>
              Welcome to Byway, where learning knows no bounds. We believe that
              education is the key to personal and professional growth, and
              we're here to guide you on your journey to success.
            </Paragraph>

            <Button
              type="primary"
              style={{
                marginTop: 12,
                width: "fit-content",
                backgroundColor: "var(--color-primary-500)",
              }}
              onClick={() => navigate(RoutesEnum.SIGNUP)}
            >
              Start your instructor journey
            </Button>
          </Flex>

          <Flex align="center">
            <Image
              src="/images/persons/1.png"
              className={styles.heroImage}
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
                className={styles.heroImage}
                width={222}
                height={222}
                preview={false}
                alt=""
              />
              <Image
                src="/images/persons/3.png"
                className={styles.heroImage}
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
}

export default Hero;
