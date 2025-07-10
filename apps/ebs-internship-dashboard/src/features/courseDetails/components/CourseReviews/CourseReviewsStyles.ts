import { createStyles } from "antd-style";

export const useCourseReviewStyles = createStyles(({ token, css }) => {
  return {
    cardReview: css`
      && .ant-card-body {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 24px;
      }
      && .ant-typography {
        margin: 0px;
      }
      && .ant-rate {
        margin: 0px;
      }

      && .ant-rate-star {
        margin: 0px !important;
      }
    `,
    paragraph: css`
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0px;
      &&.ant-typography {
        color: ${token.grey.grey600};
        font-weight: 500;
      }
    `,
    authorReview: css`
      font-size: 16px;
      color: ${token.grey.grey900};
      font-weight: 600;
    `,
    timeReview: css`
      &&.ant-typography {
        font-size: 14px;
        color: ${token.grey.grey400};
      }
    `,
    reviewMessage: css`
      &&.ant-typography {
        color: ${token.grey.grey700};
        opacity: 0.8;
      }
    `,
  };
});
