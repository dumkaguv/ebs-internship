import { Flex, Image, Typography, Grid } from "antd";
import { Container, Section } from "@/components";
import { SignInForm } from "@/features/auth/components";
import { useSignInStyles } from "./SignInStyles";

const { useBreakpoint } = Grid;

export const SignInPage = () => {
  const screens = useBreakpoint();

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

          {screens.xl && (
            <Image
              src="/images/login-hero.png"
              preview={false}
              alt="loginImg"
            />
          )}
        </Flex>
      </Section>
    </Container>
  );
};
