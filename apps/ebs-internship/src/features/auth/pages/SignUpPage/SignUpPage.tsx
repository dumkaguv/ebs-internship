import { Container, Section } from "@/components";
import { Flex, Image, Typography } from "antd";
import { SignUpForm } from "@/features/auth/components";
import { useSignUpPageStyles } from "./SignUpPageStyles";

export const SignUpPage = () => {
  const { styles } = useSignUpPageStyles();

  return (
    <Container>
      <Section>
        <Flex gap={40}>
          <Image
            src="/images/signup-hero.jpg"
            width={560}
            height={760}
            preview={false}
            alt=""
          />
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
