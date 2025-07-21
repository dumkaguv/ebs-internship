import { createStyles } from "antd-style";

export const useUserFormStyles = createStyles(({ token, css, responsive }) => {
  return {
    imageContainer: css`
      border: 1px solid ${token.grey.grey300};
      padding: 24px !important;
      border-radius: 16px;
      width: 45%;
      ${responsive.lg} {
        width: 100%;
        padding: 16px !important;
      }
    `,

    imagePreview: css`
      border: 1px solid ${token.grey.grey300};
      border-radius: 16px;
      width: 100%;
      height: 20rem;
      overflow: hidden;
      position: relative;
    `,

    image: css`
      &&.ant-image-img {
        width: 100%;
        height: 14rem;
      }
    `,

    saveImageButton: css`
      align-self: flex-start;
      &&.ant-btn {
        background-color: ${token.grey.grey900};
        color: #fff;
      }
    `,
  };
});
