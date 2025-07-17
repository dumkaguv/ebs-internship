import { Card, Flex, Typography } from "antd";
import { usePromotionBannerStyles } from "./PromotionBannerStyles";
import { ReactNode } from "react";

interface Props {
  stats: string;
  title: string;
  percent: number;
  icon: ReactNode;
}

export const PromotionBanner = ({ stats, title, percent, icon }: Props) => {
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
        <Flex
          gap={4}
          className={styles.percent}
        >
          {typeof icon === "string" ? (
            <img
              src={icon}
              alt="icon"
            />
          ) : (
            icon
          )}
          <Typography.Paragraph>{percent}%</Typography.Paragraph>
        </Flex>
      </Flex>
    </Card>
  );
};
