import { Api } from "@/services/apiClient";
import { useMutation } from "@tanstack/react-query";
import { Button, ButtonProps, message } from "antd";

interface Props extends ButtonProps {
  productId: number;
  courseTitle?: string;
  buttonText?: string;
  onSuccessCb?: (...args: unknown[]) => void;
}

export const ButtonAddToCart = ({
  productId,
  courseTitle,
  buttonText = "Add To Cart",
  onSuccessCb,
  ...rest
}: Props) => {
  const { mutate: addItem, isPending } = useMutation({
    mutationFn: () => Api.cart.addItemToCart(productId),
    onSuccess: () => {
      message.success(
        `Course ${courseTitle ?? ""} added successfully to the cart!`
      );

      onSuccessCb?.();
    },
    onError: () => {
      message.error("Error occurred. Try again later.");
    },
  });

  return (
    <Button
      type="primary"
      onClick={() => addItem()}
      loading={isPending}
      {...rest}
    >
      {buttonText}
    </Button>
  );
};
