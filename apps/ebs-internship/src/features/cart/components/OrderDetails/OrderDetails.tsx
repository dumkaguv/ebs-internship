import { Button, Col, Flex, Row, Typography } from "antd";
import type { Cart } from "@/features/cart/types";
import { useOrderDetailsStyles } from "./OrderDetailsStyles";
import { ButtonApplyCoupon } from "@/features/cart/components";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";

interface Props {
  cart?: Cart;
  isPending: boolean;
}

export const OrderDetails = ({ cart, isPending }: Props) => {
  const navigate = useNavigate();

  const { styles } = useOrderDetailsStyles({ isPending });

  return (
    <Flex
      vertical
      gap={8}
      className={styles.orderInfo}
    >
      <Typography.Title level={4}>Order Details</Typography.Title>
      <Flex
        vertical
        gap={16}
        className={styles.orderInfoInner}
      >
        <Flex
          vertical
          gap={16}
        >
          <Row
            gutter={16}
            justify="space-between"
            align="middle"
          >
            <Col>Price</Col>
            <Col>
              <Typography.Title level={5}>
                ${cart?.total.toFixed(2) ?? 0}
              </Typography.Title>
            </Col>
          </Row>

          {cart?.additional_discount ? (
            <Row
              gutter={16}
              justify="space-between"
              align="middle"
            >
              <Col>Discount</Col>
              <Col>
                <Typography.Title level={5}>
                  -${cart?.additional_discount.toFixed(2) ?? 0}
                </Typography.Title>
              </Col>
            </Row>
          ) : null}

          <Row
            gutter={16}
            justify="space-between"
            align="middle"
          >
            <Col>Tax</Col>
            <Col>
              <Typography.Title level={5}>
                ${cart?.tax.toFixed(2) ?? 0}
              </Typography.Title>
            </Col>
          </Row>
        </Flex>

        <Flex
          gap={16}
          align="center"
          justify="space-between"
        >
          <Typography.Title level={4}>Total</Typography.Title>
          <Typography.Title level={4}>
            ${cart?.total_with_tax.toFixed(2)}
          </Typography.Title>
        </Flex>
      </Flex>
      <Flex
        vertical
        gap={8}
        className={styles.actionButtons}
      >
        <ButtonApplyCoupon
          cart={cart}
          isLoading={isPending}
        />
        <Button
          onClick={() => navigate(RoutesEnum.CHECKOUT)}
          type="primary"
          disabled={cart?.items?.length === 0}
          loading={isPending}
        >
          Proceed to Checkout
        </Button>
      </Flex>
    </Flex>
  );
};
