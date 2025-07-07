import { createStyles } from "antd-style";

export const useFormMainInfoStyles = createStyles(({ css, token }) => {
  return {
    wrapper: css`
      .ant-form-item {
        margin-bottom: 0;
      }
    `,

    phoneSelect: css`
      && {
        height: inherit;
      }
    `,
  };
});
