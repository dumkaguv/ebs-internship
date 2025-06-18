import { Flex, Layout, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { RoutesEnum } from "@/config/routesEnum";
import HeaderSearch from "./HeaderSearch";
import { useEffect, useRef } from "react";
import { defineHeaderHeightCssVar } from "@/utils";
import { useHeaderStyles } from "./HeaderStyles";

const { Header } = Layout;

const AppHeader = () => {
  const headerRef = useRef(null);

  const { styles } = useHeaderStyles();

  useEffect(() => {
    defineHeaderHeightCssVar(headerRef);
  }, []);

  return (
    <Header
      ref={headerRef}
      className={styles.header}
    >
      <Flex
        justify="space-between"
        align="center"
        style={{ width: "100%", maxWidth: "1280px" }}
      >
        <Flex align="center">
          <Link
            to={RoutesEnum.HOME}
            className={styles.logoContainer}
          >
            <img
              src="/logo.jpg"
              width={31}
              height={40}
              alt=""
            />
            <Typography.Title
              level={1}
              style={{ fontSize: 16 }}
              className={styles.logoText}
            >
              Byway
            </Typography.Title>
          </Link>
        </Flex>

        <Link
          to={RoutesEnum.COURSES}
          className={styles.headerNavItem}
        >
          Categories
        </Link>

        <HeaderSearch />

        <nav>
          <Link
            to={RoutesEnum.PROFILE}
            className={styles.headerNavItem}
          >
            Teach on Byway
          </Link>
        </nav>

        <Flex
          gap={24}
          align="center"
        >
          <Button
            type="text"
            className={styles.iconCart}
          >
            <ShoppingCartOutlined />
          </Button>

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
    </Header>
  );
};

export default AppHeader;
