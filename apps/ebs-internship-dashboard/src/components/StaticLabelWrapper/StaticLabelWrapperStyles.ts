import { createStyles } from "antd-style";

export const useStaticLabelWrapperStyles = createStyles(({ css, token }) => {
  return {
    wrapper: css`
      position: relative;
      width: 100%;

      .ant-input,
      .ant-input-affix-wrapper {
        padding-top: 28px;
      }

      .ant-select-selector,
      .ant-input-number {
        width: 100%;
        min-height: 65px;
        padding-top: 32px !important;
      }
    `,

    label: css`
      position: absolute;
      top: 8px;
      left: 12px;
      background-color: ${token.colorBgContainer};
      padding: 0 4px;
      font-size: 14px;
      color: ${token.grey.grey700};
      z-index: 100;
    `,
  };
});
