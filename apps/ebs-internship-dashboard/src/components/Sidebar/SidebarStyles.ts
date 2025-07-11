import { createStyles } from "antd-style";

export const useSidebarStyles = createStyles(({ css, token }) => ({
  sider: css`
    box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.25);
    color: ${token.grey.grey100};
  `,

  header: css`
    &&.ant-flex {
      padding: 10px 10px 0 10px;
    }
  `,

  buttonCollapse: css`
    &&.ant-btn {
      padding-inline: 0;
    }
  `,

  userInfo: css`
    &&.ant-flex {
      padding: 10px;
      margin-top: auto;
      cursor: pointer;
    }
  `,

  menuItemsList: css`
    marker: none;
    padding: 0;
    margin: 0;
  `,

  menuItem: css`
    && {
      display: flex;
      align-items: center;
      height: 60px;
      padding-left: 18px;
      width: 100%;
      color: ${token.grey.grey100};
      gap: 18px;

      &:hover {
        color: color-mix(in srgb, ${token.primary.primary500} 100%, white 30%);
      }
    }
  `,

  activeMenuItem: css`
    && {
      position: relative;
      color: ${token.primary.primary500};

      &::before {
        position: absolute;
        content: "";
        inset: 0;
        width: 2px;
        height: 100%;
        background-color: ${token.primary.primary500};
      }

      &:hover {
        color: color-mix(in srgb, ${token.primary.primary500} 90%, black 30%);
      }
    }
  `,
}));
