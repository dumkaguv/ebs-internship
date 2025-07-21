import { createStyles } from "antd-style";

export const useUserLinksForm = createStyles(({ token, css, responsive }) => {
  return {
    userContainer: css`
      border: 1px solid ${token.grey.grey300};
      padding: 24px !important;
      border-radius: 16px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;

      ${responsive.sm} {
        padding: 16px !important;
      }

      && .ant-typography {
        margin: 0px;
      }

      && .ant-form-item {
        margin: 0px;
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

    saveButton: css`
      align-self: baseline;
      margin: 0px !important;

      && .ant-btn {
        background-color: ${token.grey.grey900};
        color: #fff;
      }
    `,
  };
});
