import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { useDebouncedValue } from "@/hooks";
import { Api } from "@/services/apiClient";
import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { AutoComplete, Flex, Image, Input, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebouncedValue(searchValue, 500);

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
          {course.product?.price ? `$${course.product.price}` : "Free"}
        </Flex>
      </Link>
    ),
  }));

  return (
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
        style={{ height: 40, borderColor: "var(--color-grey-700)" }}
      />
    </AutoComplete>
  );
};

export default HeaderSearch;
