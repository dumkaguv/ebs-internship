import { createStyles } from "antd-style";

export const useCourseAddFormStep2Styles = createStyles(({ css, token }) => {
  return {
    sectionDivider: css`
      &&.ant-flex {
        border-bottom: 1px solid ${token.grey.grey300};
        padding-bottom: 32px;
      }
    `,

    uploadWrapper: css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px 52px;
      background-color: ${token.grey.grey200};
    `,

    uploadPhotoIcon: css`
      font-size: 124px;
      color: ${token.grey.grey300};
    `,

    uploadedImage: css`
      && {
        width: 230px !important;
        height: 220px !important;
        object-fit: cover;
      }
    `,

    inputAuthors: css`
      && {
        height: 50px;
      }
    `,

    authorTag: css`
      && {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
      }
    `,
  };
});
