import { Button, Flex, Image, message, Skeleton, Typography } from "antd";
import { useCartItemStyles } from "./CartItemStyles";
import { useStyles } from "@/styles";
import type { CartItem as CartItemType } from "@/features/cart/types/cartItem";
import { Course, IMAGE_FALLBACKS, LOCAL_STORAGE } from "@libs";
import { Star } from "@/assets";
import { useTheme } from "antd-style";
import { Link } from "react-router-dom";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/features/cart/api";

interface Props {
  cartItem: CartItemType;
  course?: Course;
}

export const CartItem = ({ cartItem, course }: Props) => {
  const { styles } = useCartItemStyles();
  const { styles: globalStyles } = useStyles();
  const theme = useTheme();

  const queryClient = useQueryClient();

  const { product } = cartItem;

  const {
    mutate: deleteProductMutate,
    mutateAsync: deleteProductAsync,
    isPending: isProductDeleting,
  } = useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const onSaveButtonClick = async () => {
    try {
      if (!course) {
        message.error("Error occurred! Please, try again");
        return;
      }

      await deleteProductAsync(product.id);

      const existing = localStorage.getItem(LOCAL_STORAGE.WISHLIST);
      const wishlist: number[] = existing ? JSON.parse(existing) : [];

      if (!wishlist.includes(course.id)) {
        wishlist.push(course.id);
      }

      localStorage.setItem(LOCAL_STORAGE.WISHLIST, JSON.stringify(wishlist));
      message.success(`Course ${course.title} successfully moved to wishlist!`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <article
      style={{
        filter: isProductDeleting ? "blur(4px)" : "none",
      }}
      className={styles.itemCard}
    >
      <Link
        to={
          (course && getRouteUrlById(RoutesEnum.COURSES, course.id)) ??
          RoutesEnum.CART
        }
      >
        {course ? (
          <Image
            src={course?.image_url}
            width={192}
            height={108}
            fallback={IMAGE_FALLBACKS.COURSE}
            preview={false}
            alt=""
          />
        ) : (
          <Skeleton.Image
            style={{ width: 192, height: 108 }}
            active
          />
        )}
      </Link>
      <Flex
        justify="space-between"
        align="flex-start"
        gap={32}
        flex={1}
      >
        <Flex
          vertical
          gap={8}
        >
          <Flex vertical>
            <Typography.Title level={5}>{product.name}</Typography.Title>
            <Typography.Paragraph className={globalStyles.paragraphSm}>
              By {product.authors[0]?.first_name}{" "}
              {product.authors[0]?.last_name}
            </Typography.Paragraph>
          </Flex>

          <Flex
            gap={4}
            align="center"
            wrap="wrap"
          >
            <Typography.Text type="warning">4.6</Typography.Text>
            <Flex>
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  fill={theme.warning.warning300}
                  stroke="transparent"
                  width={20}
                  height={20}
                />
              ))}
            </Flex>
            <Typography.Text type="secondary">(250) rating</Typography.Text>
            {course ? (
              <>
                <Typography.Text type="secondary">|</Typography.Text>
                <Typography.Text>
                  {course.duration ?? 0} Total Hours.{" "}
                  {course.lessons?.length ?? 0} Lectures.{" "}
                  {course.level ?? "Beginner"} level
                </Typography.Text>
              </>
            ) : (
              <Skeleton.Input
                size="small"
                style={{ width: 265 }}
              />
            )}
          </Flex>

          <Flex align="center">
            <Button
              onClick={onSaveButtonClick}
              type="text"
              size="small"
              color="blue"
              variant="text"
              className={styles.buttonSaveLater}
            >
              Save for later
            </Button>
            <Typography.Text type="secondary">|</Typography.Text>

            <Button
              onClick={() => deleteProductMutate(product.id)}
              type="text"
              size="small"
              color="red"
              variant="text"
            >
              Remove
            </Button>
          </Flex>
        </Flex>

        <Typography.Title level={3}>
          {product.price?.toFixed(2)}$
        </Typography.Title>
      </Flex>
    </article>
  );
};
