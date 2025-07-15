import { Api } from "@/services/apiClient";
import { ApiResponse } from "@libs";
import { useMutation } from "@tanstack/react-query";
import { Button, ButtonProps, message } from "antd";
import { AxiosError } from "axios";

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
    onError: (err) => {
      const axiosError = err as AxiosError<ApiResponse<null>>;
      message.error(
        axiosError.response?.data.message ?? "Error occurred. Try again later."
      );
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
