import { createStyles } from "antd-style";

export const useOrderDetailsStyles = createStyles(({ css, token }) => {
  return {
    orderInfo: css`
      &&.ant-flex {
        position: sticky;
        top: calc(var(--header-height) + 20px);
        align-self: flex-start;
        max-width: 330px;
        width: 100%;
      }
    `,

    orderInfoInner: css`
      &&.ant-flex {
        width: 100%;
        padding: 16px;
        border-radius: ${token.borderRadius}px;
        background-color: ${token.grey.grey100};
        border: 1px solid ${token.grey.grey300};
        transition: filter 0.3s ease;

        .ant-row:last-child {
          padding-bottom: 16px;
          border-bottom: 1px solid ${token.grey.grey300};
        }

        .ant-row {
          margin-inline: 0 !important;
        }

        .ant-col {
          padding: 0 !important;
        }
      }
    `,

    actionButtons: css`
      &&.ant-flex {
        margin-top: 8px;
      }
    `,
  };
});
