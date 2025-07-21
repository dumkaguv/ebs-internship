import { createStyles } from "antd-style";

export const useOurCustomerStyles = createStyles(
  ({ token, css, responsive }) => {
    return {
      fullContainer: css`
        width: 100%;
        background-color: ${token.grey.grey100};
      `,
      customerContainer: css`
        display: flex;
        flex-direction: column;
        padding: 40px 0;
        gap: 20px;
      `,

      customerCard: css`
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 24px;
        flex: 0 0 auto;
        max-width: 380px;
        ${responsive.sm} {
          max-width: 200px;
        }
        && .ant-typography {
          ${responsive.sm} {
            font-size: 14px;
          }
        }
      `,

      button: css`
        &&.ant-btn {
          color: #fff;
          background: ${token.grey.grey400};
          padding: 10px 16px;
        }
      `,
      carrousel: css`
        display: flex;
        gap: 16px;
        overflow-x: auto;
        scroll-behavior: smooth;
        scrollbar-width: none;
      `,
    };
  }
);
