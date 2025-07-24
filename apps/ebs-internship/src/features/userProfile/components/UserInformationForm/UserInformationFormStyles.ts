import { createStyles } from "antd-style";

export const useUserInformationForm = createStyles(
  ({ token, css, responsive }) => {
    return {
      formContainer: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
        padding: 40px 0;
        width: 100%;
        && .ant-form-item {
          margin: 0px;
        }
      `,

      nameContainer: css`
        ${responsive.md} {
          flex-direction: column;
          gap: 0px;
        }
      `,

      userContainer: css`
        border: 1px solid ${token.grey.grey300};
        padding: 24px !important;
        border-radius: 16px;
        width: 100%;
        && .ant-typography {
          margin: 0px;
        }
        ${responsive.sm} {
          padding: 16px !important;
        }
      `,

      inputForm: css`
        &&.ant-input {
          padding: 16px;

          ${responsive.sm} {
            padding: 10px;
          }
        }
        &&.ant-input-affix-wrapper {
          padding: 16px;
        }
      `,
      formItem: css`
        width: 45%;
        ${responsive.md} {
          width: 100%;
        }
      `,

      saveButton: css`
        align-self: baseline;
        && .ant-btn {
          background-color: ${token.grey.grey900};
          color: #fff;
        }
      `,
    };
  }
);
