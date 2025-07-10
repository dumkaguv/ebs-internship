import { createStyles } from "antd-style";

export const useFiltersStyles = createStyles(({ token, css }) => {
  return {
    collapse: css`
      &&.ant-collapse {
        background-color: ${token.colorWhite};
        width: 100%;
      }
    `,
  };
});
