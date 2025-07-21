import { createStyles } from "antd-style";

export const useHeroStyles = createStyles(({ css, responsive }) => {
  return {
    section: css`
      padding-block: 40px;
    `,

    heroButton: css`
      align-self: start;
    `,

    mainWrapper: css`
      &.ant-flex {
        ${responsive.sm} {
          flex-direction: column;
          align-items: start;
        }
      }
    `,

    wrapper: css`
      max-width: 600px;
    `,

    title: css`
      && {
        font-weight: 700 !important;
        max-width: 483px;
      }
    `,

    imageWrapper: css`
      &&.ant-flex {
        ${responsive.sm} {
          gap: 8px;
        }
      }
    `,

    imageWrapperInner: css`
      &&.ant-flex {
        ${responsive.sm} {
          flex-direction: row;
        }

        ${responsive.xs} {
          flex-direction: column;
        }
      }
    `,

    image: css`
      height: 222px;
      width: 222px;
      min-width: 130px;
    `,
  };
});
