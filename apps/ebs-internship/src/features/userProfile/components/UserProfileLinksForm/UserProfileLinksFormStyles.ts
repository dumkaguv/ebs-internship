import { createStyles } from "antd-style";

export const useUserProfileLinksForm = createStyles(({ token, css }) => {
  return {
    userContainer: css`
      border: 1px solid ${token.grey.grey300};
      padding: 24px !important;
      border-radius: 16px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
    `,

    inputForm: css`
      &&.ant-input {
        padding: 16px;
      }
    `,
  };
});
