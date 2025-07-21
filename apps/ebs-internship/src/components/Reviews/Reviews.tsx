import { Avatar, Button, Flex, Rate, Typography } from "antd";
import { useReviewStyles } from "./ReviewsStyles";
import { useState } from "react";

interface Props {
  id: string;
}

const allReviews = [
  {
    userName: "Mark Doe",
    rate: 5,
    reviewed: "22and March, 2025",
    message:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    userName: "Mark Doe",
    rate: 5,
    reviewed: "10and April, 2025",
    message:
      "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
  },
  {
    userName: "Mark Doe",
    rate: 4,
    reviewed: "12and June, 2025",
    message:
      "This course is just amazing! has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and knowledgable and I was never getting bored throughout the course. This course meets more than my expectation and, I made the best investment of time to learn and practice what I am passionate about.",
  },
  {
    userName: "Mark Doe",
    rate: 3,
    reviewed: "22and March, 2020",
    message:
      "Webflow course was good, it coves design secretes, and to build responsive web pages, blog, and some more tricks and tips about webflow. I enjoyed the course and it helped me to add web development skills related to webflow in my toolbox. Thank you Vako.",
  },
  {
    userName: "Mark Doe",
    rate: 3,
    reviewed: "22and March, 2023",
    message:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
];

const rates = [
  { defaultValue: 5, percent: 80 },
  { defaultValue: 4, percent: 10 },
  { defaultValue: 3, percent: 5 },
  { defaultValue: 2, percent: 3 },
  { defaultValue: 2, percent: 2 },
];

export const Reviews = ({ id }: Props) => {
  const [moreReviews, setMoreReviews] = useState(false);
  const { styles } = useReviewStyles();

  return (
    <Flex
      vertical
      gap={24}
      className={styles.container}
      id={id}
    >
      <Typography.Title level={4}>Learner Reviews</Typography.Title>
      <Flex
        justify="space-between"
        gap={20}
        className={styles.mainContainer}
      >
        <Flex
          className={styles.ratesContainer}
          vertical
          gap={16}
        >
          <Flex
            align="center"
            gap={8}
          >
            <Rate
              disabled
              defaultValue={1}
              count={1}
            />
            <Typography.Title level={4}>4.6</Typography.Title>
            <Typography.Paragraph>146,951 reviews</Typography.Paragraph>
          </Flex>
          <Flex
            vertical
            gap={8}
          >
            {rates.map((rate, index) => (
              <Flex
                gap={8}
                key={index}
              >
                <Rate
                  disabled
                  defaultValue={rate.defaultValue}
                />
                <Typography.Paragraph>{rate.percent}%</Typography.Paragraph>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex
          className={styles.reviewsContainer}
          vertical
          align="flex-start"
          gap={16}
        >
          {(moreReviews ? allReviews : allReviews.slice(0, 3)).map(
            (review, index) => (
              <Flex
                key={index}
                justify="space-between"
                align="flex-start"
                gap={8}
                className={styles.cardReviewContainer}
              >
                <Flex
                  gap={16}
                  align="center"
                >
                  <Avatar
                    size={60}
                    src="/icons/userReviewImage.svg"
                  />
                  <Typography.Title level={4}>
                    {review.userName}
                  </Typography.Title>
                </Flex>
                <Flex
                  vertical
                  gap={8}
                  className={styles.messageContainer}
                >
                  <Flex
                    gap={28}
                    align="center"
                  >
                    <Flex
                      align="center"
                      gap={4}
                    >
                      <Rate
                        disabled
                        defaultValue={1}
                        count={1}
                      />
                      <Typography.Title level={5}>
                        {review.rate}
                      </Typography.Title>
                    </Flex>
                    <Typography.Paragraph>
                      Reviewed on {review.reviewed}
                    </Typography.Paragraph>
                  </Flex>
                  <Typography.Paragraph>{review.message}</Typography.Paragraph>
                </Flex>
              </Flex>
            )
          )}
          {allReviews.length > 3 && (
            <Button
              block
              className={styles.moreButton}
              onClick={() => setMoreReviews(!moreReviews)}
            >
              {moreReviews ? "Show less Reviews" : "View more Reviews"}
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
