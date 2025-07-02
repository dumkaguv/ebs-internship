import { createStyles } from "antd-style";

export const useActionButtonsStyles = createStyles(({ css }) => {
  return {
    modalWrapper: css`
      && .ant-modal-header {
        margin-bottom: 24px;
      }

      && .ant-modal-body {
        margin-bottom: 24px;
      }

      && .ant-modal-footer {
        display: flex;
        justify-content: space-between;
        margin-top: 0;
      }
    `,
  };
});
