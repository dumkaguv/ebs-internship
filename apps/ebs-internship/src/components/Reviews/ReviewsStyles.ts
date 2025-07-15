import { createStyles } from "antd-style";

export const useReviewStyles = createStyles(({ token, css }) => {
  return {
    container: css`
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-bottom: 20px;
      && .ant-typography {
        margin: 0px;
      }
    `,
    ratesContainer: css`
      width: 15%;
      && .ant-typography {
        color: ${token.grey.grey700};
      }
    `,
    reviewsContainer: css`
      width: 80%;
    `,
    cardReviewContainer: css`
      border: 1px solid ${token.grey.grey300};
      border-radius: 16px;
      &&.ant-flex {
        padding: 24px;
      }
      && .ant-typography {
        color: ${token.grey.grey700};
      }
    `,
    messageContainer: css`
      width: 70%;
    `,
    moreButton: css`
      &&.ant-btn {
        align-self: flex-start;
        width: auto;
      }
    `,
  };
});
