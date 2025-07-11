import { createStyles } from "antd-style";

export const useTextFormattingToolbarStyles = createStyles(({ css, token }) => {
  return {
    wrapperEditor: css`
      width: 100%;
      min-height: 250px;
      height: 100%;
      outline: none;
      border-radius: ${token.borderRadius}px;

      &:focus-within {
        border-color: ${token.colorPrimary};
        box-shadow: 0 0 0 2px ${token.colorPrimary}44;
      }

      .ProseMirror {
        width: 100%;
        height: 250px;
        margin: 0;
        padding: 0;
        padding: 12px 16px;
        outline: none;

        p {
          margin: 0;
        }

        p.is-empty::before {
          content: attr(data-placeholder);
          color: ${token.colorTextSecondary};
          float: left;
          height: 0;
          pointer-events: none;
        }
      }
    `,

    wrapperEditorButtons: css`
      &&.ant-flex {
        padding: 8px;
        border-top: 1px solid ${token.colorBorder};
      }
    `,

    wrapper: css`
      &&.ant-flex {
        border: 1px solid ${token.colorBorder};
        border-radius: ${token.borderRadius}px;
      }
    `,

    editorButton: css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      background-color: transparent;
      border: none;
      transition-duration: 0.2s;
      cursor: pointer;

      &:hover {
        background-color: ${token.grey.grey100};

        & svg {
          color: black;
        }
      }
    `,

    editorButtonIcon: css`
      color: ${token.grey.grey600};
    `,
  };
});
