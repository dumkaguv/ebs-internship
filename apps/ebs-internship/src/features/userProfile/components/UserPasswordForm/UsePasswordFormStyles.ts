import { createStyles } from "antd-style";

export const useUserPasswordFormStyles = createStyles(({ token, css }) => {
  return {
    passwordContainer: css`
      border: 1px solid ${token.grey.grey300};
      padding: 24px !important;
      border-radius: 16px;
      width: 45%;
      display: flex;
      flex-direction: column;
      gap: 16px;
    `,

    inputForm: css`
      &&.ant-input {
        padding: 16px;
      }
      &&.ant-input-affix-wrapper {
        padding: 16px;
      }
    `,

    formItem: css`
      width: 100%;
    `,

    saveButton: css`
      align-self: baseline;
      &&.ant-btn {
        background-color: ${token.grey.grey900};
        color: #fff;
      }
    `,
  };
});
