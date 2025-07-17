import { createStyles } from "antd-style";

export const useUserInformationForm = createStyles(({ token, css }) => {
  return {
    formContainer: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
      padding: 40px 0;
      width: 100%;
    `,

    userContainer: css`
      border: 1px solid ${token.grey.grey300};
      padding: 24px 24px 0px 24px !important;
      border-radius: 16px;
      width: 100%;
      && .ant-typography {
        margin: 0px;
      }
    `,
    passwordContainer: css`
      width: 45%;
      && .ant-form-item {
        width: 100%;
      }
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
      width: 45%;
    `,

    saveButton: css`
      align-self: baseline;
      && .ant-btn {
        background-color: ${token.grey.grey900};
        color: #fff;
      }
    `,
  };
});
