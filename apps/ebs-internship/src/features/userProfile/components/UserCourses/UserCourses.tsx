import { Card, Flex, Image, Progress, Rate, Typography } from "antd";
import { useUserCoursesStyles } from "./UserCoursesStyles";
import { PaginationComponent } from "@libs/components";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/services/apiClient";
import { IMAGE_FALLBACKS } from "@libs";

export const UserCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { styles } = useUserCoursesStyles();
  const perPage = 6;
  const { data } = useQuery({
    queryKey: ["courses", currentPage, perPage],
    queryFn: () =>
      Api.courses.fetchCourses({ page: currentPage, per_page: perPage }),
  });

  return (
    <Flex
      vertical
      gap={16}
      className={styles.coursesContainer}
    >
      <Typography.Title level={4}>
        Courses({data?.meta?.total})
      </Typography.Title>

      <Flex
        gap={24}
        wrap
      >
        {data?.data.map((course, index) => (
          <Card
            hoverable
            key={index}
          >
            <Image
              width={266}
              height={139}
              fallback={IMAGE_FALLBACKS.COURSE}
              src={course.image_url}
              alt="courseImg"
              className={styles.courseImg}
            />
            <Flex
              className={styles.courseInfo}
              gap={8}
              vertical
            >
              <Typography.Title
                className={styles.courseTitle}
                level={5}
              >
                {course.title}
              </Typography.Title>
              <Typography.Paragraph>
                By {course?.author?.first_name ?? "Unknown"}{" "}
                {course?.author?.last_name}
              </Typography.Paragraph>
              <Progress
                percent={50}
                format={() => ""}
              />
              <Flex
                gap={8}
                align="center"
                justify="space-between"
              >
                <Rate
                  disabled
                  defaultValue={5}
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
          total={data?.meta?.total ?? 0}
          pageSize={perPage}
          onChange={setCurrentPage}
        />
      </Flex>
    </Flex>
  );
};
