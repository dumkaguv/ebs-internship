import { createStyles } from "antd-style";

export const useSocialIconsStyles = createStyles(({ token, css }) => {
  return {
    socialIcons: css`
      border: 4px solid ${token.grey.grey200};
      background-color: ${token.colorWhite} !important;
      border-radius: 100%;
    `,
  };
});
