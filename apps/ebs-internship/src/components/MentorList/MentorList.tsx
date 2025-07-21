import { Container, Section } from "@/components";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Api } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Card, Flex, Image, List, Typography } from "antd";
import { Link } from "react-router-dom";
import { useMentorListStyles } from "./MentorListStyles";
import { IMAGE_FALLBACKS } from "@libs";

interface Props {
  title?: string;
  showSeeAllButton?: boolean;
}

export const MentorList = ({
  title = "Top Mentors",
  showSeeAllButton,
}: Props) => {
  const { data: mentors, isLoading } = useQuery({
    queryKey: ["mentors"],
    queryFn: Api.tutors.fetchTutors,
  });

  const { styles } = useMentorListStyles();

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
          grid={{
            gutter: [16, 40],
            xxl: 5,
            xl: 4,
            lg: 4,
            md: 2,
            sm: 2,
            xs: 1,
          }}
          renderItem={(mentor) => (
            <List.Item>
              <Link to={getRouteUrlById(RoutesEnum.MENTORS, mentor.id)}>
                <Card
                  hoverable
                  cover={
                    <Image
                      src={mentor.url_avatar}
                      fallback={IMAGE_FALLBACKS.USER}
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

                    <Typography.Text className={styles.mentorBio}>
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
