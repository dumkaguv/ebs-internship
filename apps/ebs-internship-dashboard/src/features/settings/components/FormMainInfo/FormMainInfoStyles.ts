import { createStyles } from "antd-style";

export const useFormMainInfoStyles = createStyles(({ css }) => {
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

    buttonSave: css`
      width: fit-content;
    `,
  };
});
