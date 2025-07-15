import { Image } from "antd";
import { useCartItemStyles } from "./CartItemStyles";
import { CartItem as CartItemType } from "@/features/cart/types/cartItem";
import { IMAGE_FALLBACKS } from "@libs";

interface Props {
  cartItem: CartItemType;
}

export const CartItem = ({ cartItem }: Props) => {
  const { styles } = useCartItemStyles();

  return (
    <article className={styles.itemCard}>
      <Image
        src={cartItem.product.poster_url}
        width={192}
        height={108}
        fallback={IMAGE_FALLBACKS.COURSE}
        preview={false}
        alt=""
      />
    </article>
  );
};
