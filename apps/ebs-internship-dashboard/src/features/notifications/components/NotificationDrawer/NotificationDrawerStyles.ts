import { createStyles } from "antd-style";

export const useNotificationDrawerStyles = createStyles(({ css, token }) => {
  return {
    buttonOpen: css`
      --circleSize: 16px;

      position: relative;

      &::after {
        content: attr(data-count-notification);
        position: absolute;
        top: 37 %;
        left: 62%;
        translate: -50% -50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--circleSize);
        height: var(--circleSize);
        background-color: ${token.red};
        color: white;
        font-size: 8px;
        text-align: center;
        border-radius: 50%;
        pointer-events: none;
      }

      &[data-count-notification="0"]::after {
        display: none;
      }
    `,

    listItem: css`
      word-break: break-word;
      white-space: normal;
      overflow-wrap: break-word;
    `,

    scrollable: css`
      height: 100%;
      padding: 2px;
      overflow-y: auto;
    `,

    buttonClearAll: css`
      padding-inline: 0;
      margin-bottom: 16px;
    `,
  };
});
