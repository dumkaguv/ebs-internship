import { createStyles } from "antd-style";

export const useOurCustomerStyles = createStyles(({ token, css }) => {
  return {
    backgroundContainer: css`
      background-color: ${token.grey.grey100};
    `,
    customerContainer: css`
      padding: 80px 0px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    `,
    customerCard: css`
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 24px;
      flex: 0 0 auto;
      width: 380px;
    `,
    carrousel: css`
      display: flex;
      gap: 16px;
      overflow-x: auto;
      scrollbehavior: smooth;
      scrollbar-width: none;
    `,

    button: css`
      &&.ant-btn {
        color: #fff;
        background: ${token.grey.grey400};
        padding: 5px 16px;
      }
    `,
  };
});
