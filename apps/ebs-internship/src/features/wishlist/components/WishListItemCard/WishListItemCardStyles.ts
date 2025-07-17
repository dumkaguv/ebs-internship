import { createStyles } from "antd-style";

export const useWishListItemCardStyles = createStyles(({ css }) => ({
  card: css`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,

  image: css`
    && {
      height: 250px !important;
      object-fit: cover;
    }
  `,

  footer: css`
    margin-top: auto;
  `,
}));
