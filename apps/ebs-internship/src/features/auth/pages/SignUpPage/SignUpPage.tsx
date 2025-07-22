import { Flex, Image, Typography, Grid } from "antd";
import { Container, Section } from "@/components";
import { SignUpForm } from "@/features/auth/components";
import { useSignUpPageStyles } from "./SignUpPageStyles";

const { useBreakpoint } = Grid;

export const SignUpPage = () => {
  const screens = useBreakpoint();

  const { styles } = useSignUpPageStyles();

  return (
    <Container>
      <Section>
        <Flex gap={40}>
          {screens.xl && (
            <Image
              src="/images/signup-hero.jpg"
              width={560}
              height={760}
              preview={false}
              alt=""
            />
          )}
          <Flex
            vertical
            flex={1}
            gap={24}
          >
            <Typography.Title
              level={2}
              className={styles.title}
            >
              Create Your Account
            </Typography.Title>
            <SignUpForm />
          </Flex>
        </Flex>
      </Section>
    </Container>
  );
};
