import { createStyles } from "antd-style";

export const useReviewsBannerStyles = createStyles(({ token, css }) => {
  return {
    reviewInfo: css`
      background-color: #fff;
      border-radius: ${token.borderRadiusSM}px;
      border: 1px solid ${token.grey.grey200}px;
      box-shadow: ${token.boxShadow};
      &&.ant-flex {
        padding: 24px 56px 16px 24px;
      }
    `,

    rateReview: css`
      background-color: #ef4444;
      padding: 4px 10px;
      border-radius: ${token.borderRadius}px;
      &&.ant-typography {
        font-size: 12px;
        font-weight: 600;
        color: #fff;
      }
    `,
  };
});
