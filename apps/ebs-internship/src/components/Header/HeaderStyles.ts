import { createStyles } from "antd-style";

export const useHeaderStyles = createStyles(({ token, css, responsive }) => {
  return {
    header: css`
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-bottom: 1px solid ${token.grey.grey200};
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
      font-size: 14px;
      font-weight: 500;
      z-index: 100;
    `,

    headerWrapper: css`
      width: 100%;
      max-width: 1280px;
    `,

    headerNavItem: css`
      && {
        color: ${token.grey.grey700};
      }
    `,

    headerSearch: css`
      display: flex;
      align-items: center;
      width: 622px;
      height: 40px;

      && .ant-input-affix-wrapper {
        padding: 8px;
      }

      ${responsive.lg} {
        width: 470px;
      }

      ${responsive.md} {
        width: 100%;
      }
    `,

    headerSearchInput: css`
      height: 40px;
      border-color: ${token.grey.grey700};
    `,

    logoContainer: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,

    logoText: css`
      && {
        font-size: 16px !important;
        color: ${token.grey.grey700};
      }
    `,

    navItem: css`
      display: inline-block;
      color: ${token.grey.grey700};
      width: fit-content;
      height: fit-content;
    `,

    login: css`
      && {
        padding: 10px;
        line-height: normal;
        border: 1px solid ${token.grey.grey700};
        background-color: transparent;
        color: ${token.grey.grey700};
        transition: background-color ${token.motionDurationMid} ease,
          color ${token.motionDurationMid} ease;

        &:hover {
          background-color: ${token.grey.grey700};
          color: ${token.colorBgBase};
        }
      }
    `,

    signUp: css`
      && {
        padding: 10px;
        line-height: normal;
        border: 1px solid ${token.grey.grey700};
        background-color: ${token.grey.grey700};
        color: ${token.colorBgBase};
        transition: background-color ${token.motionDurationMid} ease,
          color ${token.motionDurationMid} ease;

        &:hover {
          background-color: color-mix(
            in oklch,
            ${token.grey.grey700} 90%,
            white 10%
          );
          color: ${token.colorBgBase};
        }
      }
    `,

    avatarWrapper: css`
      && {
        padding-inline: 6px;
      }
    `,

    authButtonsWrapper: css`
      && {

        ${responsive.lg} {
          width: fit-content;
          margin-left: 35px;
        }
      }
    `,

    searchImage: css`
      border-radius: ${token.borderRadius}px;
    `,

    searchTextSize: css`
      && {
        font-size: 14px !important;

        ${responsive.lg} {
          max-width: 300px;
        }

        ${responsive.xs} {
          max-width: 120px;
        }
      }
    `,

    buttonAuth: css`
      &&.ant-btn {
        padding-inline: 14px;
      }
    `,

    badgeCartCount: css`
      pointer-events: none;
    `,

    mobileMenu: css`
      .ant-drawer-header-title {
        gap: 16px;
      }
    `,
  };
});
