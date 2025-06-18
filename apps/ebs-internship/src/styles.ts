import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css, responsive }) => {
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

    clampText: css`
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
  };
});
