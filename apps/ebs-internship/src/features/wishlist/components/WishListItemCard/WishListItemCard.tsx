import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { type Course, IMAGE_FALLBACKS } from "@libs";
import { Button, Card, Flex, Typography, Image } from "antd";
import { useNavigate } from "react-router-dom";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  type MouseEvent,
} from "react";
import { useWishListItemCardStyles } from "./WishListItemCardStyles";
import { ButtonAddToCart, CourseStatistics } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/services/apiClient";

interface Props {
  course: Course;
  coursesIds: number[];
  setCoursesIds: Dispatch<SetStateAction<number[]>>;
}

export const WishListItemCard = ({
  course,
  coursesIds,
  setCoursesIds,
}: Props) => {
  const [isInCart, setIsInCart] = useState(false);
  const [added, setIsAdded] = useState(false);

  const navigate = useNavigate();

  const { styles } = useWishListItemCardStyles();

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: Api.cart.fetchCart,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (cart) {
      const alreadyInCart = cart?.items?.some(
        (item) => item.product_id === course.product.id
      );
      setIsInCart(Boolean(alreadyInCart));
    }
  }, [cart, course.product.id]);

  const onRemoveFromWishlistButtonClick = (
    courseId: number,
    event: MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();

    const updated = coursesIds.filter((id) => id !== courseId);
    localStorage.setItem(LOCAL_STORAGE.WISHLIST, JSON.stringify(updated));
    setCoursesIds(updated);
  };

  return (
    <Card
      className={styles.card}
      cover={
        <Image
          src={course.image_url}
          fallback={IMAGE_FALLBACKS.COURSE}
          preview={false}
          alt={course.title}
          className={styles.image}
        />
      }
      onClick={() => navigate(getRouteUrlById(RoutesEnum.COURSES, course.id))}
      hoverable
    >
      <Flex
        vertical
        justify="space-between"
        className="h-full"
        gap={12}
      >
        <Flex
          vertical
          gap={4}
        >
          <Typography.Title level={4}>{course.title}</Typography.Title>
          <Typography.Text>
            {course.author?.first_name ?? "Unknown"} {course.author?.last_name}
          </Typography.Text>
          <CourseStatistics
            course={course}
            orientation="vertical"
          />
        </Flex>
        <Flex
          vertical
          gap={12}
          className={styles.footer}
        >
          <Typography.Title level={4}>
            ${course.product?.price?.toFixed(2) ?? "0.00"}
          </Typography.Title>
          <div onClick={(e) => e.stopPropagation()}>
            <ButtonAddToCart
              productId={course.product.id}
              onSuccessCb={() => setIsAdded(true)}
              buttonText={isInCart || added ? "Already In Cart" : "Add To Cart"}
              disabled={isInCart || added}
              block
            />
          </div>
          <Button
            onClick={(event) =>
              onRemoveFromWishlistButtonClick(course.id, event)
            }
          >
            Remove From Wishlist
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
