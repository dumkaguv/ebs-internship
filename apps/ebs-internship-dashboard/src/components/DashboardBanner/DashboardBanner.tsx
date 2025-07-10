import { Flex, Typography } from "antd";
import { useDashboardBannerStyles } from "./DashboardBannerStyles";
import graphIcon from "@/assets/graph.svg";

const banners = [
  { price: "1K", title: "Life Time Courses Commission" },
  { price: "800.0", title: "Life Time Received Commission" },
  { price: "200.0", title: "Life Time Pending Commission" },
];

interface DashboardBannerProps {
  direction?: "vertical" | "horizontal";
}

export const DashboardBanner = ({
  direction = "vertical",
}: DashboardBannerProps) => {
  const { styles } = useDashboardBannerStyles();

  return (
    <Flex
      vertical={direction === "vertical"}
      gap={16}
      className={
        direction === "vertical"
          ? styles.bannerVertical
          : styles.bannerHorizontal
      }
    >
      {banners.map((banner, index) => (
        <Flex
          key={index}
          align="center"
          gap={16}
          className={styles.bannerInfo}
        >
          <img
            src={graphIcon}
            alt="graphIcon"
          />
          <Flex vertical>
            <Typography.Title level={3}>${banner.price}</Typography.Title>
            <Typography.Paragraph>{banner.title}</Typography.Paragraph>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
