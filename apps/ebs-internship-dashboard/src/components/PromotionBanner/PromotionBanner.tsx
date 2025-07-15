import { Card, Flex, Typography } from "antd";
import { usePromotionBannerStyles } from "./PromotionBannerStyles";
import arrowIcon from "@/assets/arrow.svg";

interface Props {
  stats: string;
  title: string;
  percent: number;
}

export const PromotionBanner = ({ stats, title, percent }: Props) => {
  const { styles } = usePromotionBannerStyles();

  return (
    <Card className={styles.bannerCard}>
      <Flex
        justify="space-between"
        align="flex-start"
      >
        <Flex
          vertical
          gap={4}
        >
          <Typography.Title level={3}>{stats}</Typography.Title>
          <Typography.Paragraph className={styles.text}>
            {title}
          </Typography.Paragraph>
        </Flex>
        <Flex className={styles.percent}>
          <img
            src={arrowIcon}
            alt="arrowIcon"
          />
          <Typography.Paragraph>{percent}%</Typography.Paragraph>
        </Flex>
      </Flex>
    </Card>
  );
};
