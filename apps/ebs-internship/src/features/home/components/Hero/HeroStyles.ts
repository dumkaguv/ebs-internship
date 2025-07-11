import { createStyles } from "antd-style";

export const useHeroStyles = createStyles(({ css }) => {
  return {
    section: css`
      padding-block: 40px;
    `,

    heroButton: css`
      align-self: start;
    `,

    wrapper: css`
      max-width: 600px;
    `,

    title: css`
      && {
        font-weight: 700 !important;
        max-width: 483px;
      }
    `,
  };
});
