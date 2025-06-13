import { Container } from "@/components";
import { Button, Flex, Typography } from "antd";
import styles from "./hero.module.scss";

const { Title, Paragraph } = Typography;

function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <Flex
          justify="space-between"
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
                width: 190,
                paddingBlock: 10,
                paddingInline: 24,
                height: "fit-content",
                fontSize: 14,
                fontWeight: 500,
                marginTop: 12,
              }}
            >
              Start your instructor journey
            </Button>
          </Flex>

          <Flex
            align="center"
          >
            <img
              src="/images/persons/1.png"
              className={styles.heroImage}
              width={222}
              height={222}
              alt=""
            />
            <Flex
              vertical
              gap={8}
            >
              <img
                src="/images/persons/2.png"
                className={styles.heroImage}
                width={222}
                height={222}
                alt=""
              />
              <img
                src="/images/persons/3.png"
                className={styles.heroImage}
                width={222}
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
