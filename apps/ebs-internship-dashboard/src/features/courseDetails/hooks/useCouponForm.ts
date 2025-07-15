import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCouponById } from "@/features/courseDetails/api/fetchCouponById";
import { editCouponInformation } from "@/features/courseDetails/api/editCouponInformation";
import { createNewCoupon } from "@/features/courseDetails/api/createNewCoupon";
import { Coupon } from "@libs/types/coupon";
import { useEffect } from "react";
import { message } from "antd";

export const useCouponForm = (couponId?: number | null) => {
  const [form] = useForm();
  const queryClient = useQueryClient();
  const isEditMode = !!couponId;

  const { data: couponData } = useQuery({
    queryKey: ["coupon", couponId],
    queryFn: () => fetchCouponById(Number(couponId)),
    enabled: isEditMode,
  });

  useEffect(() => {
    if (isEditMode && couponData) {
      form.setFieldsValue({
        ...couponData,
        active: couponData.active.toString(),
        startDate: dayjs(couponData.active_from),
        startTime: dayjs(couponData.active_from),
        endDate: dayjs(couponData.active_to),
        endTime: dayjs(couponData.active_to),
      });
    } else {
      form.resetFields();
    }
  }, [couponData, isEditMode, form]);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: isEditMode
      ? (data: Coupon) => editCouponInformation(couponId, data)
      : createNewCoupon,
    onSuccess: async () => {
      message.success(
        `Coupon was ${isEditMode ? "updated" : "created"} successfully`
      );
      await queryClient.invalidateQueries({ queryKey: ["coupons"] });
    },
    onError: () => {
      message.error("Something went wrong");
    },
  });

  const submitCouponInfo = async () => {
    try {
      const formValues = await form.validateFields();
      const { active, startDate, startTime, endDate, endTime } = formValues;

      const active_from = dayjs(startDate)
        .hour(startTime.hour())
        .minute(startTime.minute())
        .second(0)
        .toISOString();

      const active_to = dayjs(endDate)
        .hour(endTime.hour())
        .minute(endTime.minute())
        .second(0)
        .toISOString();

      const allCouponData = {
        ...formValues,
        active: active === true || active === "true",
        active_from,
        active_to,
      };

      await mutateAsync(allCouponData);
      return true;
    } catch (error) {
      console.error("Validation failed or mutation failed:", error);
      return false;
    }
  };

  return {
    form,
    isEditMode,
    isPending,
    submitCouponInfo,
  };
};
