import { Image } from "antd";
import { useCartItemStyles } from "./CartItemStyles";
import { CartItem as CartItemType } from "@/features/cart/types/cartItem";

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
        fallback="https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png"
        preview={false}
        alt=""
      />
    </article>
  );
};
