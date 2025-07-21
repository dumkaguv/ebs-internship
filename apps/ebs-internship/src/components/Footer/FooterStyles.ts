import { createStyles } from "antd-style";

// export const useFooterStyles = createStyles(({ token, css, responsive }) => {
//   return {
//     footer: css`
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     `,
//     footerContainer: css`
//       max-width: 1280px;
//       width: 100%;
//     `,
//     footerDescription: css`
//       max-width: 416px;
//       width: 100%;
//     `,
//     logoTitle: css`
//       &&.ant-typography {
//         color: ${token.grey.grey100};
//       }
//     `,
//     title: css`
//       &&.ant-typography {
//         color: ${token.grey.grey100};
//       }
//     `,
//     paragraph: css`
//       color: ${token.grey.grey300} !important;
//     `,
//   };
// });
export const useFooterStyles = createStyles(({ token, css, responsive }) => {
  return {
    footer: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,

    footerContainer: css`
      max-width: 1312px;
      width: 100%;
      &&.ant-flex {
        padding-inline: 16px;
      }

      ${responsive.md} {
        flex-direction: row;
      }

      ${responsive.sm} {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    `,
    footerDescription: css`
      max-width: 416px;
      width: 100%;

      ${responsive.sm} {
        align-items: center;
      }
    `,
    logoTitle: css`
      &&.ant-typography {
        color: ${token.grey.grey100};
        font-size: 20px;
      }
    `,
    title: css`
      &&.ant-typography {
        color: ${token.grey.grey100};
        margin-bottom: 8px;
      }
    `,
    paragraph: css`
      color: ${token.grey.grey300} !important;
      font-size: 14px;

      ${responsive.sm} {
        font-size: 13px;
      }
    `,
  };
});
