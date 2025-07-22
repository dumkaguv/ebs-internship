import { Button, Flex, Image, message, Skeleton, Typography } from "antd";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Course, IMAGE_FALLBACKS, LOCAL_STORAGE } from "@libs";
import { CourseStatistics } from "@/components";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import type { CartItem as CartItemType } from "@/features/cart/types/cartItem";
import { deleteProduct } from "@/features/cart/api";
import { useStyles } from "@/styles";
import { useCartItemStyles } from "./CartItemStyles";

interface Props {
  cartItem: CartItemType;
  course?: Course;
}

export const CartItem = ({ cartItem, course }: Props) => {
  const queryClient = useQueryClient();

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

  const { styles } = useCartItemStyles({ isProductDeleting });
  const { styles: globalStyles } = useStyles();

  const { product } = cartItem;

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
    <article className={styles.itemCard}>
      <Link
        to={
          (course && getRouteUrlById(RoutesEnum.COURSES, course.id)) ??
          RoutesEnum.CART
        }
      >
        {course ? (
          <Image
            src={course?.image_url}
            fallback={IMAGE_FALLBACKS.COURSE}
            preview={false}
            className={styles.image}
            alt=""
          />
        ) : (
          <Skeleton.Image
            style={{ width: 160, height: 150 }}
            active
          />
        )}
      </Link>
      <Flex
        justify="space-between"
        align="flex-start"
        flex={1}
        className={styles.mainInfo}
      >
        <Flex
          vertical
          gap={8}
        >
          <Flex vertical>
            <Typography.Title level={5}>
              {course?.title ?? product.name}
            </Typography.Title>
            <Typography.Paragraph className={globalStyles.paragraphSm}>
              By {product.authors[0]?.first_name ?? "Unknown  "}{" "}
              {product.authors[0]?.last_name}
            </Typography.Paragraph>
          </Flex>

          <CourseStatistics
            course={course}
            orientation="vertical"
          />

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

        <Typography.Title
          level={3}
          className={styles.price}
        >
          {product.price?.toFixed(2)}$
        </Typography.Title>
      </Flex>
    </article>
  );
};
