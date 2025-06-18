import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { useDebouncedValue } from "@/hooks";
import { Api } from "@/services/apiClient";
import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { AutoComplete, Flex, Image, Input, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHeaderStyles } from "./HeaderStyles";

const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebouncedValue(searchValue, 500);

  const { styles } = useHeaderStyles();

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () =>
      Api.courses.fetchCourseByName(debouncedSearch.toLowerCase().trim()),
    enabled: !!debouncedSearch,
  });

  const options = searchResults?.map((course) => ({
    value: course.id.toString(),
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
            <Image
              src={course.image_url}
              fallback="https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png"
              alt=""
              preview={false}
              width={45}
              height={45}
              style={{ borderRadius: 6 }}
            />
            <Flex vertical>
              <Typography.Title
                style={{ fontSize: 14 }}
                level={5}
              >
                {course.title}
              </Typography.Title>
              <Typography.Text style={{ fontSize: 14 }}>
                {course.author?.first_name} {course.author?.last_name}
              </Typography.Text>
            </Flex>
          </Flex>
          {course.product?.price ? `$${course.product.price}` : "Free"}
        </Flex>
      </Link>
    ),
  }));

  return (
    <AutoComplete
      options={options}
      onSearch={setSearchValue}
      value={searchValue}
      onChange={setSearchValue}
      allowClear
      popupMatchSelectWidth={false}
      notFoundContent={
        !searchValue ? null : isLoading ? (
          <span>Loading...</span>
        ) : (
          <span>No results</span>
        )
      }
      className={styles.headerSearch}
    >
      <Input
        prefix={<SearchOutlined />}
        placeholder="Search courses..."
        className={styles.headerSearchInput}
      />
    </AutoComplete>
  );
};

export default HeaderSearch;
