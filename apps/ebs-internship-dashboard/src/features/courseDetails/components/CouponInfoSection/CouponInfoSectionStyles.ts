import { createStyles } from "antd-style";

export const useCouponInfoSectionStyles = createStyles(({ token, css }) => {
  return {
    selectInput: css`
      &&.ant-select {
        width: 100%;
      }
    `,
  };
});
