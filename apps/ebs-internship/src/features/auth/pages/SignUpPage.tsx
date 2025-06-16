import { Container, Section } from "@/components";
import { Flex, Image, Typography } from "antd";
import { SignUpForm } from "../components";

function SignUpPage() {
  return (
    <Container size="lg">
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
              style={{ textAlign: "center", marginBottom: 16 }}
            >
              Create Your Account
            </Typography.Title>
            <SignUpForm />
          </Flex>
        </Flex>
      </Section>
    </Container>
  );
}

export default SignUpPage;
