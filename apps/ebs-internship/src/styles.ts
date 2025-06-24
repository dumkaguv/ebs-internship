import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => {
  return {
    paragraph: css`
      &&.ant-typography {
        color: ${token.grey.grey700};
        font-size: 16px;
      }
    `,

    paragraphMD: css`
      &&.ant-typography {
        color: ${token.grey.grey900};
        font-weight: 500;
      }
    `,

    paragraphSm: css`
      &&.ant-typography {
        color: ${token.grey.grey700};
        font-size: 14px;
      }
    `,
  };
});
