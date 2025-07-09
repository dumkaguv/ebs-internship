import { Flex, Typography } from "antd";
import { useReviewsBannerStyles } from "./ReviewsBannerStyles";

const reviews = [
  { title: "Total Reviews", number: 1000 },
  { title: "1 star reviews", number: 100, rate: "1.0" },
  { title: "2 star reviews", number: 100, rate: "2.0" },
  { title: "3 star reviews", number: 100, rate: "3.0" },
  { title: "4 star reviews", number: 100, rate: "4.0" },
  { title: "5 star reviews", number: 100, rate: "5.0" },
];

const rateColors: Record<string, string> = {
  "1.0": "#ef4444",
  "2.0": "#CA8A04",
  "3.0": "#FACC15",
  "4.0": "#4ADE80",
  "5.0": "#16A34A",
};

export const ReviewsBanner = () => {
  const { styles } = useReviewsBannerStyles();

  return (
    <Flex
      justify="space-between"
      className={styles.bannersContainer}
    >
      {reviews.map((review, index) => (
        <Flex
          key={index}
          className={styles.reviewInfo}
          vertical
          gap={4}
        >
          <Typography.Paragraph>{review.title}</Typography.Paragraph>
          <Flex gap={6}>
            <Typography.Title level={4}>{review.number}</Typography.Title>
            {review.rate && (
              <Typography.Paragraph
                className={styles.rateReview}
                style={{
                  backgroundColor: rateColors[review.rate],
                }}
              >
                {review.rate}
              </Typography.Paragraph>
            )}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
