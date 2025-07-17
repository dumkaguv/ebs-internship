import { createStyles } from "antd-style";

export const useUserReviewsStyles = createStyles(({ token, css }) => {
  return {
    reviewContainer: css`
      &&.ant-flex {
        padding: 16px;
        border: 1px solid ${token.grey.grey300};
        border-radius: 16px;
      }

      && .ant-typography {
        margin: 0px;
        font-size: 14px;
      }
    `,

    reviewTitle: css`
      &&.ant-typography {
        font-size: 18px;
      }
    `,

    reviewMessage: css`
      width: 90%;
      &&.ant-typography {
        color: #334155;
        font-size: 16px;
      }
    `,
  };
});
