import { createStyles } from "antd-style";

export const useUserCoursesStyles = createStyles(({ token, css }) => {
  return {
    coursesContainer: css`
      width: 100%;
      && .ant-typography {
        margin: 0px;
      }
    `,
    courseImg: css`
      border-radius: 8px;
    `,

    inputSearch: css`
      max-width: 300px;
    `,

    courseInfo: css`
      &&.ant-flex {
        padding-top: 16px;
      }
    `,
  };
});
