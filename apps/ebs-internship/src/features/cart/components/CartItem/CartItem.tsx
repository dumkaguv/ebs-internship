import { Flex, Image, Typography } from "antd";
import { useCartItemStyles } from "./CartItemStyles";
import { useStyles } from "@/styles";
import { CartItem as CartItemType } from "@/features/cart/types/cartItem";
import { IMAGE_FALLBACKS } from "@libs";


interface Props {
  cartItem: CartItemType;
}

export const CartItem = ({ cartItem }: Props) => {
  const { styles } = useCartItemStyles();
  const { styles: globalStyles } = useStyles();

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
      <Flex vertical>
        <Typography.Title level={5}>{cartItem.name}</Typography.Title>
        <Typography.Paragraph className={globalStyles.paragraphSm}>
          {cartItem.authors[0].first_name} {cartItem.authors[0].last_name}
        </Typography.Paragraph>
      </Flex>
    </article>
  );
};
