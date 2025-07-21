import {
  HeartOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Button, Drawer, Flex } from "antd";
import { useState } from "react";
import { useHeaderStyles } from "./HeaderStyles";
import { HeaderSearch } from "./HeaderSearch";
import { RoutesEnum } from "@/config/routesEnum";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCart } from "@/services/cart";

export const HeaderMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  const { styles } = useHeaderStyles();

  const showDrawer = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={showDrawer}
        icon={<MenuOutlined />}
      />
      <Drawer
        title={<HeaderSearch />}
        placement="top"
        height="100dvh"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={isOpen}
        classNames={{ header: styles.mobileMenu }}
      >
        <Flex
          vertical
          gap={4}
          align="start"
          onClick={onClose}
          className={styles.authButtonsWrapper}
        >
          <Button
            onClick={() => navigate(RoutesEnum.COURSES)}
            type="text"
            className={styles.buttonAuth}
          >
            Courses
          </Button>
          <Button
            onClick={() => navigate(RoutesEnum.WISHLIST)}
            type="text"
            className={styles.buttonAuth}
          >
            Wishlist <HeartOutlined style={{ fontSize: 20 }} />
          </Button>
          <Badge
            count={cart?.items?.length ?? 0}
            size="small"
            offset={[-10, 10]}
            classNames={{ indicator: styles.badgeCartCount }}
          >
            <Button
              onClick={() => navigate(RoutesEnum.CART)}
              type="text"
              className={styles.buttonAuth}
            >
              Cart <ShoppingCartOutlined style={{ fontSize: 20 }} />
            </Button>
          </Badge>

          <Flex
            gap={24}
            align="center"
          >
            <Link
              to={RoutesEnum.SIGNIN}
              className={styles.login}
            >
              Log In
            </Link>
            <Link
              to={RoutesEnum.SIGNUP}
              className={styles.signUp}
            >
              Sign Up
            </Link>
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
};
