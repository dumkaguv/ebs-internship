import { createStyles } from "antd-style";

export const useUserProfileFormStyles = createStyles(({ token, css }) => {
  return {
    imageContainer: css`
      border: 1px solid ${token.grey.grey300};
      padding: 24px !important;
      border-radius: 16px;
      width: 100%;
    `,

    imagePreview: css`
      border: 1px solid ${token.grey.grey300};
      border-radius: 16px;
      width: 45%;
      height: 15rem;
      overflow: hidden;
      position: relative;
    `,

    inputForm: css`
      &&.ant-input {
        width: 60%;
      }
    `,

    image: css`
      &&.ant-image-img {
        width: 100%;
        height: 14rem;
      }
    `,

    defaultImage: css`
      padding: 16px;
      width: 100%;
      height: 100%;
    `,

    uploadContainer: css`
      padding-top: 40px !important;
      &&.ant-btn {
        align-self: baseline;
      }
    `,

    uploadButton: css`
      &&.ant-upload {
        &:hover {
          background-color: ${token.grey.grey800};
          color: ${token.colorWhite};
        }
      }
    `,
    saveImageButton: css`
      align-self: flex-start;
      &&.ant-btn {
        background-color: ${token.grey.grey800};
        color: #fff;
      }
    `,
  };
});
