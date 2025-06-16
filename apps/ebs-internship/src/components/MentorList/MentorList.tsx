import { Container, Section } from "@/components";
import { RoutesEnum } from "@/config/routesEnum";
import { Api } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Card, Flex, Image, List, Typography } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  title?: string;
  showSeeAllButton?: boolean;
}

const MentorList: FC<Props> = ({ title = "Top Mentors", showSeeAllButton }) => {
  const { data: mentors, isLoading } = useQuery({
    queryKey: ["mentors"],
    queryFn: Api.tutors.fetchTutors,
  });

  return (
    <Container>
      <Section
        title={title}
        endAdornment={
          showSeeAllButton && <Link to={RoutesEnum.COURSES}>See All</Link>
        }
      >
        <List
          loading={isLoading}
          dataSource={mentors?.slice(0, 4)}
          grid={{ gutter: 16, column: 5 }}
          renderItem={(mentor) => (
            <List.Item>
              <Link to={RoutesEnum.MENTORS}>
                <Card
                  hoverable 
                  cover={
                    <Image
                      src={mentor.url_avatar}
                      fallback="https://static.vecteezy.com/system/resources/previews/046/409/821/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg"
                      alt=""
                      preview={false}
                      height={240}
                    />
                  }
                >
                  <Flex
                    vertical
                    align="center"
                  >
                    <Typography.Title level={5}>
                      {mentor.first_name} {mentor.last_name}
                    </Typography.Title>

                    <Typography.Text
                      className="clamp-text"
                      style={{ textAlign: "center" }}
                    >
                      {mentor.bio}
                    </Typography.Text>
                  </Flex>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </Section>
    </Container>
  );
};

export default MentorList;
