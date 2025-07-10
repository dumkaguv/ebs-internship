import { Container, Section } from "@/components";
import { Flex, Image, Typography } from "antd";
import { SignInForm } from "@/features/auth/components";
import { useSignInStyles } from "./SignInStyles";

export const SignInPage = () => {
  const { styles } = useSignInStyles();

  return (
    <Container>
      <Section>
        <Flex
          gap={40}
          align="center"
        >
          <Flex
            vertical
            flex={1}
            gap={24}
          >
            <Typography.Title
              level={2}
              className={styles.title}
            >
              Sign in to your account
            </Typography.Title>

            <SignInForm />
          </Flex>
          <Image
            src="/images/login-hero.png"
            preview={false}
            alt="loginImg"
          />
        </Flex>
      </Section>
    </Container>
  );
};
