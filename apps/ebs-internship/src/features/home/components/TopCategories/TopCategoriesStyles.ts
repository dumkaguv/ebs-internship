import { createStyles } from "antd-style";

export const useTopCategoriesStyles = createStyles(({ token, css }) => {
  return {
    topCategoriesCard: css`
      && {
        padding-top: 20px;
        text-align: center;
      }
    `,

    topCategoriesIconWrapper: css`
      position: relative;
      margin-bottom: 40px;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
        width: 80px;
        height: 80px;
        background-color: ${token.primary.primary100};
        border-radius: 50%;
      }
    `,

    topCategoriesIcon: css`
      position: relative;
      z-index: 10;
    `,
  };
});
