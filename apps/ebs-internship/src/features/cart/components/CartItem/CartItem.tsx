import { Flex, Image, Typography } from "antd";
import { useCartItemStyles } from "./CartItemStyles";
import { useStyles } from "@/styles";
import { CartItem as CartItemType } from "../../types/cartItem";
import { FC } from "react";

interface Props {
  cartItem: CartItemType["product"][number];
}

const CartItem: FC<Props> = ({ cartItem }) => {
  const { styles } = useCartItemStyles();
  const { styles: globalStyles } = useStyles();

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
      <Flex vertical>
        <Typography.Title level={5}>{cartItem.name}</Typography.Title>
        <Typography.Paragraph className={globalStyles.paragraphSm}>
          {cartItem.authors[0].first_name} {cartItem.authors[0].last_name}
        </Typography.Paragraph>
      </Flex>
    </article>
  );
};

export default CartItem;
