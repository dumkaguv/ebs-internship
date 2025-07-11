import { createStyles } from "antd-style";

export const useFooterStyles = createStyles(({ token, css }) => {
  return {
    footer: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    footerContainer: css`
      max-width: 1280px;
      width: 100%;
    `,
    footerDescription: css`
      max-width: 416px;
      width: 100%;
    `,
    logoTitle: css`
      &&.ant-typography {
        color: ${token.grey.grey100};
      }
    `,
    title: css`
      &&.ant-typography {
        color: ${token.grey.grey100};
      }
    `,
    paragraph: css`
      color: ${token.grey.grey300} !important;
    `,
  };
});
