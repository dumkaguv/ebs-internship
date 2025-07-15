import { Star } from "@/assets";
import { Course } from "@libs";
import { Flex, Skeleton, Typography } from "antd";
import { useTheme } from "antd-style";

interface Props {
  course?: Course;
  orientation?: "vertical" | "horizontal";
}

export const CourseStatistics = ({
  course,
  orientation = "horizontal",
}: Props) => {
  const theme = useTheme();

  return (
    <Flex
      gap={4}
      align={orientation === "horizontal" ? "center" : ""}
      wrap="wrap"
      vertical={orientation === "vertical"}
    >
      <Flex
        align="center"
        gap={4}
      >
        <Typography.Text type="warning">4.6</Typography.Text>
        <Flex>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              fill={theme.warning.warning300}
              stroke="transparent"
              width={20}
              height={20}
            />
          ))}
        </Flex>
        <Typography.Text type="secondary">(250) rating</Typography.Text>
      </Flex>
      {course ? (
        <>
          {orientation === "horizontal" ? (
            <Typography.Text type="secondary">|</Typography.Text>
          ) : null}
          <Typography.Text>
            {course.duration ?? 0} Total Hours. {course.lessons?.length ?? 0}{" "}
            Lectures. {course.level ?? "Beginner"} level
          </Typography.Text>
        </>
      ) : (
        <Skeleton.Input
          size="small"
          style={{ width: 265 }}
        />
      )}
    </Flex>
  );
};
