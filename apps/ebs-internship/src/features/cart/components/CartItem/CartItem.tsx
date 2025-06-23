import { Image } from "antd";
import { useCartItemStyles } from "./CartItemStyles";
import { CartItem as CartItemType } from "../../types/cartItem";
import { FC } from "react";

interface Props {
  cartItem: CartItemType["product"][number];
}

const CartItem: FC<Props> = ({ cartItem }) => {
  const { styles } = useCartItemStyles();

  return (
    <article className={styles.itemCard}>
      <Image
        src={cartItem.poster_url}
        width={192}
        height={108}
        fallback="https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png"
        preview={false}
        alt=""
      />
    </article>
  );
};

export default CartItem;
