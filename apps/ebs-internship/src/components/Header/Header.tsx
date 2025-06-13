import { Flex, Layout, Typography, Input, Button } from "antd";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Title } = Typography;

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
            to="/"
            className={styles.logoContainer}
          >
            <img
              src="/logo.jpg"
              className={styles.logo}
              width={31}
              height={40}
              alt=""
            />
            <Title
              level={1}
              style={{ fontSize: 16, marginBottom: 0 }}
              className={styles.logoText}
            >
              Byway
            </Title>
          </Link>
        </Flex>

        <Link
          to="/"
          className={styles.navItem}
        >
          Categories
        </Link>

        <Input
          style={{ width: 622 }}
          prefix={<SearchOutlined />}
          placeholder="Search courses..."
          className={styles.search}
          allowClear
        />

        <nav className={styles.nav}>
          <Link
            to="/"
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
            to="/"
            className={styles.login}
          >
            Log In
          </Link>
          <Link
            to="/"
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
