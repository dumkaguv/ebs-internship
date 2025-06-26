import { Flex, Typography } from "antd";
import { useDashboardBannerStyles } from "./DashboardBannerStyles";

const banners = [
  { price: "1K", title: "Life Time Courses Commission" },
  { price: "800.0", title: "Life Time Received Commission" },
  { price: "200.0", title: "Life Time Pending Commission" },
];

export const DashboardBanner = () => {
  const { styles } = useDashboardBannerStyles();
  return (
    <Flex
      vertical
      gap={16}
      className={styles.bannerContainer}
    >
      {banners.map((banner, index) => (
        <Flex
          key={index}
          align="center"
          gap={16}
          className={styles.bannerInfo}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
          >
            <path
              d="M44 14.6666L28.2627 30.4039C27.4707 31.1959 27.0747 31.5919 26.618 31.7403C26.2163 31.8708 25.7837 31.8708 25.382 31.7403C24.9253 31.5919 24.5293 31.1959 23.7373 30.4039L18.2627 24.9294C17.4707 24.1373 17.0747 23.7413 16.618 23.5929C16.2163 23.4624 15.7837 23.4624 15.382 23.5929C14.9253 23.7413 14.5293 24.1373 13.7373 24.9294L4 34.6666M44 14.6666H30M44 14.6666V28.6666"
              stroke="#16A34A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Flex vertical>
            <Typography.Title level={3}>${banner.price}</Typography.Title>
            <Typography.Paragraph>{banner.title}</Typography.Paragraph>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
