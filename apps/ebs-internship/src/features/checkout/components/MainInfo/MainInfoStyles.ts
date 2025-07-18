import { createStyles } from "antd-style";

export const useMainInfoStyles = createStyles(({ css, token }) => {
  return {
    container: css`
      &&.ant-flex {
        width: 100%;
        height: fit-content;
        padding: 16px;
        border-radius: calc(${token.borderRadius}px * 2);
        background-color: ${token.colorWhite};
        border: 1px solid ${token.grey.grey300};

        .ant-form-item {
          margin-bottom: 12px;
        }
      }
    `,

    paymentContainer: css`
      &&.ant-flex {
        padding: 12px;
        border-radius: ${token.borderRadius}px;
        background-color: ${token.grey.grey100};
        border: 1px solid ${token.grey.grey200};

        .ant-form-item {
          margin-bottom: 0;
        }
      }
    `,
  };
});
