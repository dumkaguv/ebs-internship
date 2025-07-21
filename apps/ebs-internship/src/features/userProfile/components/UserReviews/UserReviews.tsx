import { Flex, Rate, Typography } from "antd";
import { useUserReviewsStyles } from "./UserReviewsStyles";

const reviews = [
  {
    courseName: "Beginner's Guide to Design",
    rating: 5,
    reviewMessage:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    courseName: "Beginner's Guide to Design",
    rating: 4,
    reviewMessage:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    courseName: "Beginner's Guide to Design",
    rating: 3,
    reviewMessage:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
];

export const UserReviews = () => {
  const { styles } = useUserReviewsStyles();

  return (
    <Flex
      vertical
      gap={16}
    >
      <Typography.Title level={4}>Reviews ({reviews.length})</Typography.Title>
      <Flex
        gap={16}
        vertical
      >
        {reviews.map((review, index) => (
          <Flex
            className={styles.reviewContainer}
            vertical
            gap={16}
            key={index}
          >
            <Flex
              gap={8}
              align="center"
            >
              <Typography.Paragraph>Course Name:</Typography.Paragraph>
              <Typography.Title
                className={styles.reviewTitle}
                level={5}
              >
                {review.courseName}
              </Typography.Title>
            </Flex>
            <Flex
              gap={8}
              align="center"
            >
              <Typography.Paragraph>Rating:</Typography.Paragraph>
              <Rate
                defaultValue={review.rating}
                disabled
              />
            </Flex>
            <Flex gap={8}>
              <Typography.Paragraph>Review:</Typography.Paragraph>
              <Typography.Paragraph className={styles.reviewMessage}>
                {review.reviewMessage}
              </Typography.Paragraph>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
