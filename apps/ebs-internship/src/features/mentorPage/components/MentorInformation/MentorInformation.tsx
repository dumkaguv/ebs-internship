import { Container } from "@/components";
import { Author } from "@libs";
import { Avatar, Button, Flex, List, Space, Typography } from "antd";
import { useMentorInformationStyles } from "./MentorInformationStyles";

interface Props {
  data: Author;
}

export const MentorInformation = ({ data }: Props) => {
  const { styles } = useMentorInformationStyles();

  const expertiseAreas = [
    "User Experience (UX) Design",
    "User Interface (UI) Design",
    "Information Architecture",
    "Interaction Design",
    "Visual Design",
    "Usability Testing",
    "Wireframing and Prototyping",
    "Design Thinking",
  ];

  return (
    <Container className={styles.informationContainer}>
      <Flex
        className={styles.firstSide}
        vertical
      >
        <Space direction="vertical">
          <Typography.Paragraph>Instructor</Typography.Paragraph>
          <Typography.Title level={2}>
            {data.first_name} {data.last_name}
          </Typography.Title>
          <Typography.Paragraph>{data.bio}</Typography.Paragraph>
        </Space>

        <Flex
          vertical
          className={styles.mentorDescription}
          gap={16}
        >
          <Flex
            vertical
            gap={8}
          >
            <Typography.Title level={4}>
              About {data.first_name} {data.last_name}
            </Typography.Title>
            <Typography.Paragraph>
              {data.first_name} {data.last_name} is a highly skilled UX/UI
              Designer with over a decade of experience in crafting user-centric
              digital solutions. With a background in graphic design and a keen
              eye for detail, Ronald specializes in creating intuitive
              interfaces that delight users and drive business results.
            </Typography.Paragraph>
          </Flex>

          <Flex
            vertical
            gap={8}
          >
            <Typography.Title level={4}>Areas of Expertise</Typography.Title>
            <List
              dataSource={expertiseAreas}
              split={false}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Paragraph>• {item}</Typography.Paragraph>
                </List.Item>
              )}
            ></List>
          </Flex>

          <Flex
            vertical
            gap={8}
          >
            <Typography.Title level={4}>
              Professional Experience
            </Typography.Title>
            <Typography.Paragraph>
              {data.first_name} {data.last_name} has an extensive professional
              background in UX/UI design, having worked with renowned companies
              such as [Company Name] and [Company Name]. His portfolio includes
              a diverse range of projects spanning web applications, mobile
              apps, and e-commerce platforms.
            </Typography.Paragraph>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        vertical
        align="center"
        gap={27}
      >
        <Avatar
          size={200}
          src={
            data.url_avatar ??
            "https://static.vecteezy.com/system/resources/previews/046/409/821/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg"
          }
        />
        <Flex
          vertical
          gap={8}
          className={styles.buttonContainer}
        >
          <a
            href="https://www.website.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button block>Website</Button>
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button block>Twitter</Button>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button block>Youtube</Button>
          </a>
        </Flex>
      </Flex>
    </Container>
  );
};
