import { createStyles } from "antd-style";

export const useUserProfileInformationForm = createStyles(({ token, css }) => {
  return {
    userContainer: css`
      border: 1px solid ${token.grey.grey300};
      padding: 24px 24px 0px 24px !important;
      border-radius: 16px;
      width: 100%;
    `,
    inputForm: css`
      &&.ant-input {
        padding: 16px;
      }
    `,
    formItem: css`
      width: 45%;
    `,
  };
});
