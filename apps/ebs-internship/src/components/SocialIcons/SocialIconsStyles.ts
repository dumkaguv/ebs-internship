import { createStyles } from "antd-style";

export const useSocialIconsStyles = createStyles(({ token, css }) => {
  return {
    wrapper: css`
      && {
        margin-top: 20px;
      }
    `,

    socialIcons: css`
      background-color: ${token.colorWhite} !important;
      border-radius: 100%;
    `,
  };
});
