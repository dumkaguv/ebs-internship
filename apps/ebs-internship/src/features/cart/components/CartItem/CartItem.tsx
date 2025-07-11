import { Button, Flex, Image, message, Skeleton, Typography } from "antd";
import { useCartItemStyles } from "./CartItemStyles";
import { useStyles } from "@/styles";
import type { CartItem as CartItemType } from "@/features/cart/types/cartItem";
import { Course, IMAGE_FALLBACKS, LOCAL_STORAGE } from "@libs";
import { Link } from "react-router-dom";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/features/cart/api";
import { CourseStatistics } from "@/components";

interface Props {
  cartItem: CartItemType;
  course?: Course;
}

export const CartItem = ({ cartItem, course }: Props) => {
  const { styles } = useCartItemStyles();
  const { styles: globalStyles } = useStyles();

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
            <Typography.Title level={5}>
              {course?.title ?? product.name}
            </Typography.Title>
            <Typography.Paragraph className={globalStyles.paragraphSm}>
              By {product.authors[0]?.first_name}{" "}
              {product.authors[0]?.last_name}
            </Typography.Paragraph>
          </Flex>

          <CourseStatistics course={course} />

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
