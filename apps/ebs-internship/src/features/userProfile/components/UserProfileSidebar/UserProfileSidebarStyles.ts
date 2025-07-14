import { createStyles } from "antd-style";

export const useUserProfileSidebarStyles = createStyles(({ token, css }) => {
  return {
    profileContainer: css`
      max-width: 290px;
      width: 100%;
      background-color: #f8fafc;
      border: 0px;
      border-radius: 16px !important;
    `,

    avatarContainer: css`
      padding: 24px 0 !important;
      border-bottom: 1px solid ${token.grey.grey300};
    `,

    shareButton: css`
      padding: 10px 24px;
      max-width: 164px;
    `,

    defaultLink: css`
      width: 100%;
      padding: 16px;
      color: #000 !important;
      &:hover {
        background-color: ${token.grey.grey900};
        color: #fff !important;
      }
    `,

    activeLink: css`
      width: 100%;
      padding: 16px;
      background-color: ${token.grey.grey900} !important;
      color: #fff !important;
      &:hover {
        background-color: ${token.grey.grey900};
        color: #fff;
      }
    `,
  };
});
