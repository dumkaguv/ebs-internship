import { Course, IMAGE_FALLBACKS } from "@libs";
import { useCourseInstructorsStyles } from "./CourseIntructorsStyles";
import { Avatar, Flex, Typography } from "antd";
import { Link } from "react-router-dom";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";

interface Props {
  data: Course;
  id: string;
}

export const CourseInstructors = ({ data, id }: Props) => {
  const { styles } = useCourseInstructorsStyles();
  return (
    <Flex
      className={styles.instructors}
      vertical
      gap={16}
      id={id}
    >
      <Typography.Title level={4}>
        Course Instructor (
        {data?.authors?.length === 0 ? 1 : data?.authors?.length})
      </Typography.Title>
      {data?.authors?.map((author) => (
        <Flex
          className={styles.authorCard}
          vertical
          gap={20}
          key={author.id}
        >
          <Flex vertical>
            <Link
              className={styles.authorLink}
              to={getRouteUrlById(RoutesEnum.MENTORS, data.author_id)}
            >
              {author?.first_name ?? "John"} {author?.last_name ?? "Doezel"}
            </Link>
            <Typography.Paragraph>
              {author?.bio ?? "UI/UX Designer"}
            </Typography.Paragraph>
          </Flex>
          <Flex
            gap={16}
            align="center"
          >
            <Avatar
              size={120}
              src={author?.url_avatar ?? IMAGE_FALLBACKS.USER}
            />
            <Flex
              gap={10}
              vertical
            >
              <Typography.Paragraph className={styles.authorInfo}>
                <img
                  src="icons/award.svg"
                  alt="awardIcon"
                />
                40,445 Reviews
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.authorInfo}>
                <img
                  src="icons/graduation.svg"
                  alt="graduationIcon"
                />
                500 students
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.authorInfo}>
                <img
                  src="icons/play.svg"
                  alt="playIcon"
                />
                {data.lessons?.length} Courses
              </Typography.Paragraph>
            </Flex>
          </Flex>
          <Typography.Paragraph>
            With over a decade of industry experience, {author?.first_name}{" "}
            brings a wealth of practical knowledge to the classroom. He has
            played a pivotal role in designing user-centric interfaces for
            renowned tech companies, ensuring seamless and engaging user
            experiences.
          </Typography.Paragraph>
        </Flex>
      ))}
    </Flex>
  );
};
