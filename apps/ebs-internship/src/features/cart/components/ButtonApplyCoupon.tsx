import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, message, Modal, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { applyCoupon, deleteCoupon } from "@/features/cart/api";
import type { Cart } from "@/features/cart/types";

interface FormValues {
  code: string;
}

interface Props {
  cart: Cart;
  isLoading: boolean;
}

export const ButtonApplyCoupon = ({ cart, isLoading }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = useForm<FormValues>();

  const queryClient = useQueryClient();

  const { mutateAsync: applyCouponAsync, isPending: isApplying } = useMutation({
    mutationFn: (code: string) => applyCoupon({ code }),
    onSuccess: () => {
      message.success("Coupon successfully applied!");
    },
    onError: () => {
      message.error("Error occurred applying coupon. Please try again.");
    },
  });

  const { mutateAsync: deleteCouponAsync, isPending: isDeleting } = useMutation(
    {
      mutationFn: deleteCoupon,
      onSuccess: () => {
        message.success("Coupon successfully deleted!");
      },
      onError: () => {
        message.error("Error occurred deleting coupon. Please try again.");
      },
    }
  );

  const onButtonClick = async () => {
    if (cart.coupon) {
      await deleteCouponAsync();
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    } else {
      setIsModalOpen(true);
    }
  };

  const handleOk = async () => {
    try {
      await form.validateFields();

      const valuesFromForm = form.getFieldsValue();
      await applyCouponAsync(valuesFromForm.code);
      queryClient.invalidateQueries({ queryKey: ["cart"] });

      setIsModalOpen(false);
    } catch (e) {
      message.error("Validation fields error!");
      console.log(e);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(cart);

  return (
    <>
      <Button
        onClick={onButtonClick}
        loading={isDeleting || isApplying || isLoading}
        disabled={cart?.items.length === 0}
      >
        {cart?.coupon ? "Delete Coupon" : "Apply a Coupon"}
      </Button>
      <Modal
        title={<Typography.Title level={3}>Apply a Coupon</Typography.Title>}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ loading: isApplying }}
        onCancel={handleCancel}
        centered
      >
        <Form
          form={form}
          requiredMark={false}
          layout="vertical"
        >
          <Form.Item
            name="code"
            label={<Typography.Text>Coupon Code</Typography.Text>}
            rules={[
              {
                required: true,
                message: "Please enter coupon code",
              },
            ]}
          >
            <Input
              placeholder="Enter your coupon code here..."
              className="input"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
