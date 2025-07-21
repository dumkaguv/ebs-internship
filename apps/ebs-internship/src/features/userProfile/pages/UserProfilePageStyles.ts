import { createStyles } from "antd-style";

export const useUserProfilePageStyles = createStyles(({ css, responsive }) => {
  return {
    pageContainer: css`
      display: flex;
      gap: 40px;
      padding: 40px 0;
      align-items: flex-start;

      ${responsive.sm} {
        flex-direction: column;
      }
    `,
  };
});
