import { createStyles } from "antd-style";

export const useBecomeInstructorPromoStyles = createStyles(
  ({ token, css, responsive }) => {
    return {
      wrapper: css`
        &&.ant-flex {
          ${responsive.lg} {
            flex-direction: column;
            align-items: start;
            gap: 32px;

            &:nth-of-type(even) {
              flex-direction: column-reverse;
              align-items: end;
            }
          }
        }
      `,

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

      image: css`
        max-width: 470px;
        max-height: 380px;
      `,
    };
  }
);
