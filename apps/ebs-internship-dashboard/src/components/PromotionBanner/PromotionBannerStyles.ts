import { createStyles } from "antd-style";

export const usePromotionBannerStyles = createStyles(({ token, css }) => {
  return {
    bannerCard: css`
      width: 25%;
    `,
    percent: css`
      &&.ant-flex {
        background-color: ${token.grey.grey100};
        padding: 8px;
        border-radius: 8px;
        box-shadow: 0px 0px 8px 0px rgba(59, 130, 246, 0.12);
        && .ant-typography {
          margin: 0px;
          color: #16a34a;
        }
      }
    `,
    text: css`
      &&.ant-typography {
        margin: 0px;
        font-size: 14px;
      }
    `,
  };
});
