import { createStyles } from "antd-style";

export const useReviewStyles = createStyles(({ token, css, responsive }) => {
  return {
    container: css`
      &&.ant-flex {
        gap: 24px;
        padding-bottom: 20px;
      }
      && .ant-typography {
        margin: 0px;
      }
    `,
    mainContainer: css`
      ${responsive.md} {
        flex-direction: column;
      }
    `,
    ratesContainer: css`
      && .ant-typography {
        color: ${token.grey.grey700};

        ${responsive.sm} {
          font-size: 14px;
        }
      }
    `,
    reviewsContainer: css`
      width: 80%;
      ${responsive.md} {
        width: 100%;
      }
    `,
    cardReviewContainer: css`
      border: 1px solid ${token.grey.grey300};
      border-radius: 16px;
      &&.ant-flex {
        padding: 24px;
      }
      && .ant-typography {
        color: ${token.grey.grey700};

        ${responsive.sm} {
          font-size: 14px;
        }
      }
      ${responsive.sm} {
        flex-direction: column;
      }
    `,
    messageContainer: css`
      width: 70%;
      ${responsive.sm} {
        width: 100%;
      }
    `,
    moreButton: css`
      &&.ant-btn {
        align-self: flex-start;
        width: auto;
      }
    `,
  };
});
