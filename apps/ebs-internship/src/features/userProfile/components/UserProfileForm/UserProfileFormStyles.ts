import { createStyles } from "antd-style";

export const useUserProfileFormStyles = createStyles(({ css, responsive }) => {
  return {
    formContainer: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
      padding: 40px 0;
      width: 100%;
    `,
    imageAndPasswordContainer: css`
      width: 100%;
      ${responsive.lg} {
        flex-direction: column;
      }
    `,
  };
});
