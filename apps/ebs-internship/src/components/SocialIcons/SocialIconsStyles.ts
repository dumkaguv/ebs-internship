import { createStyles } from "antd-style";

export const useSocialIconsStyles = createStyles(({ token, css }) => {
  return {
    socialIcons: css`
      background-color: ${token.colorWhite} !important;
      border-radius: 100%;
    `,
  };
});
