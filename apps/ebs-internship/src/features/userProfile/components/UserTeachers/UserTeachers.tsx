import { Button, Card, Divider, Flex, Typography } from "antd";
import { useUserTeachersStyles } from "./UserTeachersStyles";
import { useQuery } from "@tanstack/react-query";
import { fetchTutors } from "@/services/tutors";
import { UserTeachersSkeleton } from "../UserTeachersSkeleton";

export const UserTeachers = () => {
  const { styles } = useUserTeachersStyles();
  const { data, isLoading } = useQuery({
    queryKey: ["tutors"],
    queryFn: fetchTutors,
  });

  if (isLoading) return <UserTeachersSkeleton count={6} />;

  return (
    <Flex
      vertical
      gap={16}
      className={styles.teachersContainer}
    >
      <Typography.Title level={4}>Teachers ({data?.length})</Typography.Title>

      <Flex
        gap={24}
        align="stretch"
        wrap
      >
        {data?.map((teacher) => (
          <Card
            key={teacher.id}
            className={styles.teacherCard}
          >
            <img
              height={200}
              src={teacher.url_avatar}
              alt={teacher.first_name}
              className={styles.teacherImg}
            />
            <Flex
              vertical
              gap={10}
              align="center"
              justify="space-between"
              className={styles.teacherBio}
            >
              <Flex
                vertical
                align="center"
              >
                <Typography.Title level={5}>
                  {teacher.first_name} {teacher.last_name}
                </Typography.Title>
                <Typography.Paragraph className={styles.teacherInfo}>
                  {teacher.bio}
                </Typography.Paragraph>
              </Flex>
              <Divider size="small" />
              <Button
                type="primary"
                className={styles.messageButton}
              >
                Send Message
                <img
                  src="/icons/mail.svg"
                  alt="mailIcon"
                />
              </Button>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};
