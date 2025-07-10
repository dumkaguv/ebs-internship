import { createStyles } from "antd-style";

export const usePaginationStyles = createStyles(({ token, css }) => {
  return {
    pagination: css`
      box-shadow: ${token.boxShadow};
      border-radius: ${token.borderRadius}px;
      &.ant-pagination {
        .ant-pagination-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 15px;
          margin: 0px;
          border-radius: 0px;
          border: 1px solid ${token.grey.grey300};

          &:hover {
            background-color: ${token.grey.grey800} !important;
            border-color: ${token.grey.grey800};
            a {
              color: #fff;
            }
          }

          a {
            color: ${token.grey.grey800};
            transition: color 0.2s;
            margin: 0px;
          }
        }

        .ant-pagination-item-active {
          background-color: ${token.grey.grey800};
          border-color: ${token.grey.grey800};

          a {
            color: #fff;
          }
        }

        .ant-pagination-prev,
        .ant-pagination-next {
          background-color: #fff;
          margin: 0px;
          padding: 20px 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid ${token.grey.grey300};

          .ant-pagination-item-link {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${token.grey.grey800};
          }

          &:hover {
            background-color: ${token.grey.grey800};
            border-color: ${token.grey.grey800};

            .ant-pagination-item-link {
              color: #fff;

              svg {
                color: #fff;
              }
            }
          }
        }

        .ant-pagination-prev {
          border-radius: 8px 0px 0px 8px;
        }

        .ant-pagination-next {
          border-radius: 0px 8px 8px 0px;
        }
      }
    `,
  };
});
