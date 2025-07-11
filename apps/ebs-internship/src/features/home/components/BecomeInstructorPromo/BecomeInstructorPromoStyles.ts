import { createStyles } from "antd-style";

export const useBecomeInstructorPromoStyles = createStyles(({ token, css }) => {
  return {
    title: css`
      &&.ant-typography {
        color: ${token.common.black};
      }
    `,

    description: css`
      &&.ant-typography {
        max-width: 550px;
        color: ${token.grey.grey800};
      }
    `,
  };
});
