import { createStyles } from "antd-style";

export const useCreateOrEditCouponStyles = createStyles(({ token, css }) => {
  return {
    formContainer: css`
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;

      && .ant-typography {
        margin: 0px;
      }
      && .ant-picker {
        padding-left: 16px;
        padding-top: 36px;
        width: 100%;
      }

      && .ant-form-item {
        margin: 0px;
      }
    `,
    inputsContainer: css`
      width: 50%;
      gap: 18px;
    `,
  };
});
