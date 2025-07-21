import { createStyles } from "antd-style";

export const useCartItemStyles = createStyles(
  ({ css, token, responsive }, props?: { isProductDeleting: boolean }) => {
    return {
      itemCard: css`
        display: flex;
        gap: 8px;
        padding: 16px 24px 16px 16px;
        border-radius: ${token.borderRadius}px;
        background-color: ${token.colorWhite};
        border: 1px solid ${token.grey.grey300};

        transition: filter 0.3s ease;

        ${props?.isProductDeleting && {
          filter: "blur(4px);",
        }}

        ${responsive.xl} {
          padding: 12px 16px 12px 12px;
        }

        ${responsive.xs} {
          flex-direction: column;
        }
      `,

      buttonSaveLater: css`
        &&.ant-btn {
          padding-left: 0;
        }
      `,

      price: css`
        white-space: nowrap;
      `,

      image: css`
        &&.ant-image-img {
          width: 150px;
          height: 140px;
          object-fit: cover;

          ${responsive.sm} {
            height: 200px;
            max-width: 200px;
            width: 100%;
          }

          ${responsive.xs} {
            max-width: unset;
            height: 100%;
            aspect-ratio: 4/3;
          }
        }
      `,

      mainInfo: css`
        gap: 32px;

        ${responsive.sm} {
          flex-direction: column;
          gap: 16px;
        }
      `,
    };
  }
);
