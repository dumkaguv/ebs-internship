import { Flex, Layout, Typography, Button } from "antd";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { RoutesEnum } from "@/config/routesEnum";
import HeaderSearch from "./HeaderSearch";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className={styles.header}>
      <Flex
        style={{
          alignItems: "center",
          width: "100%",
          maxWidth: 1280,
          justifyContent: "space-between",
        }}
      >
        <Flex align="start">
          <Link
            to={RoutesEnum.HOME}
            className={styles.logoContainer}
          >
            <img
              src="/logo.jpg"
              className={styles.logo}
              width={31}
              height={40}
              alt=""
            />
            <Typography.Title
              level={1}
              style={{ fontSize: 16, marginBottom: 0 }}
              className={styles.logoText}
            >
              Byway
            </Typography.Title>
          </Link>
        </Flex>

        <Link
          to={RoutesEnum.COURSES}
          className={styles.navItem}
        >
          Categories
        </Link>

        <Flex
          className={styles.searchContainer}
          style={{ position: "relative" }}
        >
          <HeaderSearch />
        </Flex>

        <nav className={styles.nav}>
          <Link
            to={RoutesEnum.PROFILE}
            className={styles.navItem}
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
