import { Button, Card, Flex, Input, Progress, Rate, Typography } from "antd";
import { useUserCoursesStyles } from "./UserCoursesStyles";
import { DownOutlined } from "@ant-design/icons";
import { PaginationComponent } from "@libs/components";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUserCourses } from "@/features/userProfile/api/fetchUserCourses";

const courses = [
  {
    title: "Beginner's Guide to Design",
    author: "Ronald Richards",
    rate: 5,
    progress: 30,
  },
  {
    title: "Beginner's Guide to Design",
    author: "Ronald Richards",
    rate: 5,
    progress: 40,
  },
  {
    title: "Beginner's Guide to Design",
    author: "Ronald Richards",
    rate: 5,
    progress: 50,
  },
];

export const UserCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { styles } = useUserCoursesStyles();
  const { data } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchUserCourses,
  });

  return (
    <Flex
      vertical
      gap={16}
      className={styles.coursesContainer}
    >
      <Typography.Title level={4}>
        Courses ({data?.lessons?.length ?? courses.length})
      </Typography.Title>
      <Flex
        justify="space-between"
        align="center"
      >
        <Input.Search
          className={styles.inputSearch}
          placeholder="Search Course"
          size="large"
        />

        <Flex
          gap={24}
          align="center"
        >
          <Flex
            gap={15}
            align="center"
          >
            <Typography.Paragraph>Sort by</Typography.Paragraph>
            <Button>
              Relevence <DownOutlined />
            </Button>
          </Flex>
          <Button>
            <img
              src="/icons/filter.svg"
              alt="filterIcon"
            />
            Filter
          </Button>
        </Flex>
      </Flex>

      <Flex
        gap={24}
        wrap
      >
        {courses.map((course, index) => (
          <Card
            hoverable
            key={index}
          >
            <img
              width={266}
              height={139}
              src="images/userCourse.jpg"
              alt="courseImg"
              className={styles.courseImg}
            />
            <Flex
              className={styles.courseInfo}
              gap={8}
              vertical
            >
              <Typography.Title level={5}>{course.title}</Typography.Title>
              <Typography.Paragraph>By {course.author}</Typography.Paragraph>
              <Progress
                percent={course.progress}
                format={() => ""}
              />
              <Flex
                gap={8}
                align="center"
                justify="space-between"
              >
                <Rate
                  disabled
                  defaultValue={course.rate}
                />
                <Typography.Paragraph>(1200 Ratings)</Typography.Paragraph>
              </Flex>
            </Flex>
          </Card>
        ))}
      </Flex>
      <Flex
        align="center"
        justify="center"
      >
        <PaginationComponent
          current={currentPage}
          total={12}
          pageSize={6}
          onChange={() => setCurrentPage(2)}
        />
      </Flex>
    </Flex>
  );
};
