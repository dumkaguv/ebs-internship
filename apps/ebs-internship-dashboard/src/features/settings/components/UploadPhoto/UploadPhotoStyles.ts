import { createStyles } from "antd-style";

export const useUploadPhotoStyles = createStyles(({ css, token }) => {
  return {
    uploadPhotoWrapper: css`
      &&.ant-flex {
        width: 320px;
        padding: 32px;
        background-color: ${token.grey.grey100};
      }

      .ant-upload {
        width: 100%;
      }
    `,

    imageWrapper: css`
      position: relative;
      width: 200px;
      height: 200px;
    `,

    profileImage: css`
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    `,

    imageUploadButton: css`
      --uploadButtonHeight: 50px;

      && {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: var(--uploadButtonHeight);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        border-radius: ${token.borderRadiusLG}px;

        transition: background-color 0.3s ease;

        &:hover {
          background: rgba(0, 0, 0, 0.3);
          color: ${token.colorWhite};
        }

        &:active {
          background: rgba(0, 0, 0, 0.35);
          color: ${token.colorWhite};
        }

        && .ant-btn {
          width: 100%;
          height: var(--uploadButtonHeight);
          color: ${token.colorWhite};

          &:hover {
            color: ${token.colorWhite};
          }

          &:active {
            color: ${token.colorWhite};
          }
        }
      }
    `,

    imageText: css`
      &.ant-typography {
        font-size: 14px;
        color: ${token.grey.grey500};
      }
    `,
  };
});
