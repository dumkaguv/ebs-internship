import { Button, Flex, Form, Typography } from "antd";
import { useCreateOrEditCouponStyles } from "./CreateNewCouponStyles";
import {
  CouponCodeSection,
  CouponInfoSection,
  CouponTimeDateSection,
} from "@/features/courseDetails/components";
import { useCouponForm } from "@/features/courseDetails/hooks/useCouponForm";

interface Props {
  onCancel: () => void;
  couponId?: number | null;
}

export const CreateOrEditCoupon = ({ onCancel, couponId }: Props) => {
  const { styles } = useCreateOrEditCouponStyles();
  const { form, isEditMode, isPending, submitCouponInfo } =
    useCouponForm(couponId);

  const handleSubmit = async () => {
    const isSuccess = await submitCouponInfo();
    if (isSuccess) {
      onCancel();
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      className={styles.formContainer}
      requiredMark={false}
      scrollToFirstError
      onFinish={handleSubmit}
    >
      <Flex
        align="center"
        justify="space-between"
      >
        <Typography.Title level={4}>
          Coupons / {isEditMode ? "Edit coupon" : "Create coupon"}
        </Typography.Title>
        <Flex gap={20}>
          <Button
            type="primary"
            danger
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            loading={isPending}
          >
            {isEditMode ? "Update" : "Save"}
          </Button>
        </Flex>
      </Flex>

      <Flex
        vertical
        className={styles.inputsContainer}
      >
        <CouponInfoSection />
        <CouponCodeSection />
        <CouponTimeDateSection />
      </Flex>
    </Form>
  );
};
