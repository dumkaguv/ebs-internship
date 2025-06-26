import { createStyles } from "antd-style";

export const useDashboardBannerStyles = createStyles(({ token, css }) => {
  return {
    bannerContainer: css`
      width: 30%;
    `,
    bannerInfo: css`
      background-color: #fff;
      border-radius: ${token.borderRadiusLG}px;
      border: 1px solid ${token.grey.grey200};
      box-shadow: ${token.boxShadow};
      &&.ant-flex {
        padding: 16px 40px;
      }
    `,
  };
});
