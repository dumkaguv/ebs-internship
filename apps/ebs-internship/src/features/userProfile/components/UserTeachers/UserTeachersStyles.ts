import { createStyles } from "antd-style";

export const useUserTeachersStyles = createStyles(({ token, css }) => {
  return {
    teachersContainer: css`
      width: 100%;
      && .ant-typography {
        margin: 0px;
      }
    `,

    teacherCard: css`
      width: 220px;

      && .ant-typography {
        margin: 0px;
      }
    `,
    inputSearch: css`
      max-width: 300px;
    `,

    teacherImg: css`
      border-radius: 8px;
      width: 100%;
    `,

    teacherBio: css`
      &&.ant-flex {
        padding-top: 16px;
      }
    `,

    teacherInfo: css`
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `,

    messageButton: css`
      &&.ant-btn {
        background-color: #2563eb;
        width: 100%;
      }
    `,
  };
});
