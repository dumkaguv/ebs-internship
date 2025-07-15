import { ReviewsBanner } from "@/components";
import { Avatar, Card, Flex, Rate, Typography } from "antd";
import { useCourseReviewStyles } from "./CourseReviewsStyles";
import avatarImage from "@/assets/avatar.svg";

const reviews = [
  {
    rate: 4,
    courseName: "Beginers Guide to Design",
    author: "Chris Walter",
    time: "3 days ago",
    message:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    rate: 5,
    courseName: "Data Warehouse - The Ultimate Guide",
    author: "Michel Evans",
    time: "2 days ago",
    message:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    rate: 4,
    courseName: "Beginers Guide to Design",
    author: "Chris Walter",
    time: "3 days ago",
    message:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    rate: 5,
    courseName: "Data Warehouse - The Ultimate Guide",
    author: "Michel Evans",
    time: "1 days ago",
    message:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    rate: 4,
    courseName: "Beginers Guide to Design",
    author: "Chris Walter",
    time: "3 days ago",
    message:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
];

export const CourseReviews = () => {
  const { styles } = useCourseReviewStyles();

  return (
    <Flex
      vertical
      gap={16}
    >
      <ReviewsBanner />
      {reviews.map((review, index) => (
        <Card
          className={styles.cardReview}
          key={index}
        >
          <Typography.Paragraph className={styles.paragraph}>
            Rating:
            <Rate
              disabled
              defaultValue={review.rate}
            />
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.paragraph}>
            Course Name:
            <Typography.Title level={5}>{review.courseName}</Typography.Title>
          </Typography.Paragraph>
          <Flex
            gap={8}
            align="center"
          >
            <Avatar
              src={avatarImage}
              alt="avatar"
            />
            <Flex vertical>
              <Typography.Paragraph className={styles.authorReview}>
                {review.author}
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.timeReview}>
                {review.time}
              </Typography.Paragraph>
            </Flex>
          </Flex>
          <Typography.Paragraph className={styles.reviewMessage}>
            {review.message}
          </Typography.Paragraph>
        </Card>
      ))}
    </Flex>
  );
};
