import { createStyles } from "antd-style";

export const useOrderDetailsStyles = createStyles(
  ({ css, token, responsive }, props: { isPendingCart?: boolean }) => {
    return {
      container: css`
        &&.ant-flex {
          position: sticky;
          top: calc(var(--header-height) + 10px);
          align-self: flex-start;
          min-width: 400px;
          max-width: 400px;

          ${props.isPendingCart && "filter: blur(4px); pointer-event: none;"}

          ${responsive.md} {
            max-width: unset;
            min-width: 320px;
          }
        }
      `,

      card: css`
        &&.ant-flex {
          padding: 16px;
          border: 1px solid ${token.grey.grey200};
          border-radius: ${token.borderRadius}px;
          background-color: ${token.grey.grey100};
        }
      `,

      totalPrice: css`
        &&.ant-flex {
          padding-top: 16px;
          border-top: 1px solid ${token.grey.grey300};
        }
      `,
    };
  }
);
