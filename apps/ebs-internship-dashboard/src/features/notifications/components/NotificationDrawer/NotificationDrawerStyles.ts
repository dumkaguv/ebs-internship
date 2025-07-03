import { createStyles } from "antd-style";

export const useNotificationDrawerStyles = createStyles(({ css }) => {
  return {
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
