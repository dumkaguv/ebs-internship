import { createStyles } from "antd-style";

export const useBreadcrumbStyles = createStyles(({ token, css, cx }) => {
  return {
    customBreadcrumb: css`
      &&.ant-breadcrumb ol {
        display: flex;
        align-items: center;
        gap: 14px;
        margin: 15px 0;
        // margin-top: 15px;
        // margin-bottom: 40px;
      }

      &&.ant-breadcrumb li {
        margin: 0;
        padding: 0;
      }

      && .ant-breadcrumb-separator {
        color: ${token.grey.grey700};
        font-weight: 600;
        font-size: 16px;
      }
    `,
    breadcrumbTitle: css`
      color: ${token.grey.grey700} !important;
      font-weight: 400;
      font-size: 16px;

      &:hover {
        color: #2563eb;
        background-color: #fff;
      }
    `,

    inactive: css`
      color: #2563eb;
      font-size: 16px;
      font-weight: 400;
    `,
  };
});
