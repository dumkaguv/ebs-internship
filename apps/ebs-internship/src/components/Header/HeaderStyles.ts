import { createStyles } from "antd-style";

export const useHeaderStyles = createStyles(({ token, css }) => {
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
        color: ${token.grey.grey700};
      }
    `,

    navItem: css`
      display: inline-block;
      color: ${token.grey.grey700};
      width: fit-content;
      height: fit-content;
    `,

    iconCart: css`
      margin-left: 84px;
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
  };
});
