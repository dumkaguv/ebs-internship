import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCoupon } from "@/features/courseDetails/api/deleteCoupon";
import { message } from "antd";

interface UseDeleteCouponOptions {
  onSuccess?: () => void;
}

export const useDeleteCoupon = ({ onSuccess }: UseDeleteCouponOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCoupon,
    onSuccess: () => {
      message.success("Coupon deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["coupons"],
      });
      onSuccess?.();
    },
    onError: () => {
      message.error("Failed to delete coupon");
    },
  });
};
