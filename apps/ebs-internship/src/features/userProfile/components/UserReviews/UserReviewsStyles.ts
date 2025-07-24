import { createStyles } from "antd-style";

export const useUserReviewsStyles = createStyles(
  ({ token, css, responsive }) => {
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

          ${responsive.sm} {
            font-size: 16px;
          }
        }
      `,

      reviewMessage: css`
        width: 80%;
        &&.ant-typography {
          color: #334155;
          font-size: 16px;
        }
      `,
    };
  }
);
