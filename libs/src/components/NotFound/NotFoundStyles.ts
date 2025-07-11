import { createStyles } from "antd-style";

export const useNotFoundStyles = createStyles(({ css }) => {
  return {
    wrapper: css`
      &&.ant-flex {
        height: 100%;
        padding: 16px;
      }
    `,

    info: css`
      &&.ant-flex {
        max-width: 540px;
      }
    `,
  };
});
