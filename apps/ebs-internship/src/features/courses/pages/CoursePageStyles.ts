import { createStyles } from "antd-style";

export const useCoursePageStyles = createStyles(({ token, css }) => {
  return {
    paginationWrapper: css`
      width: fit-content;
      align-self: center;
      box-shadow: ${token.boxShadow};
      border: 1px solid ${token.grey.grey300};
      border-radius: ${token.borderRadiusSM}px;
    `,

    paginationNext: css`
      border: 1px solid ${token.grey.grey300} !important;
      margin-right: 0 !important;
    `,
  };
});
