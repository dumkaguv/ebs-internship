import { Flex, Layout, Typography, AutoComplete, Input, Button } from "antd";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { useState } from "react";
import { useDebouncedValue } from "@/hooks";
import { fetchCourseByName } from "@/services/fetchCourseByName";
import { useQuery } from "@tanstack/react-query";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebouncedValue(searchValue, 500);

  const { data: searchResults = [], isLoading } = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () => fetchCourseByName(debouncedSearch.toLowerCase().trim()),
    enabled: !!debouncedSearch,
  });

  const options = searchResults.map((course) => ({
    value: course.title,
    label: (
      <Link to={getRouteUrlById(RoutesEnum.COURSES, course.id)}>
        <Flex
          align="center"
          justify="space-between"
          gap={8}
        >
          <Flex
            gap={8}
            align="center"
          >
            <img
              src={
                course.image_url ??
                "https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png"
              }
              alt=""
              width={45}
              height={45}
              style={{ borderRadius: 6 }}
            />
            <Flex vertical>
              <Typography.Title
                style={{ marginBottom: 0, fontSize: 14 }}
                level={5}
              >
                {course.title}
              </Typography.Title>
              <Typography.Text style={{ fontSize: 14 }}>
                {course.author?.first_name} {course.author?.last_name}
              </Typography.Text>
            </Flex>
          </Flex>
          {course.product?.price ?? "Free"}
        </Flex>
      </Link>
    ),
  }));

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
          to={RoutesEnum.COURSES}
          className={styles.navItem}
        >
          Categories
        </Link>

        <Flex
          className={styles.searchContainer}
          style={{ position: "relative" }}
        >
          <AutoComplete
            options={options}
            style={{ width: 622 }}
            onSearch={setSearchValue}
            value={searchValue}
            onChange={setSearchValue}
            notFoundContent={
              !searchValue ? null : isLoading ? (
                <span>Loading...</span>
              ) : (
                <span>No results</span>
              )
            }
            allowClear
            popupMatchSelectWidth={false}
            dropdownAlign={{ offset: [0, 10] }}
          >
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search courses..."
              className={styles.search}
            />
          </AutoComplete>
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
