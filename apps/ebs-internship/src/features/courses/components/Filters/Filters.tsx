import { Collapse, CollapseProps, Flex, Typography } from "antd";
import { useFiltersStyles } from "./FiltersStyles";
import { useMemo } from "react";
import { useStyles } from "@/styles";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/services/apiClient";
import { LoadableCheckboxGroup } from "@/components/LoadableCheckboxGroup";

const Filters = () => {
  const { styles } = useFiltersStyles();
  const { styles: globalStyles } = useStyles();

  const { data: mentors, isLoading: isMentorsLoading } = useQuery({
    queryKey: ["mentors"],
    queryFn: Api.tutors.fetchTutors,
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: Api.categories.fetchCategories,
  });

  const filtersConfig = useMemo(
    () => [
      {
        key: "categories",
        label: "Categories",
        options: categories?.map((c) => ({ id: c.id, name: c.name })) || [],
        loading: isCategoriesLoading,
      },
      {
        key: "authors",
        label: "Mentors",
        options:
          mentors?.map((m) => ({
            id: m.id,
            name: m.first_name + " " + m.last_name,
          })) || [],
        loading: isMentorsLoading,
      },
    ],
    [categories, isCategoriesLoading, mentors, isMentorsLoading]
  );

  const items: CollapseProps["items"] = filtersConfig.map((filter) => ({
    key: filter.key,
    label: (
      <Typography.Paragraph className={globalStyles.paragraphMD}>
        {filter.label}
      </Typography.Paragraph>
    ),
    children: filter.loading ? (
      <Typography.Text>Loading...</Typography.Text>
    ) : (
      <LoadableCheckboxGroup
        items={filter.options}
        urlParam={filter.key}
        showSearch
      />
    ),
  }));

  return (
    <Flex
      gap={6}
      style={{ width: "100%" }}
      align="start"
    >
      <Collapse
        style={{ width: "100%" }}
        size="large"
        className={styles.collapse}
        items={items}
        bordered={false}
        defaultActiveKey={["categories"]}
        expandIconPosition="end"
      />
    </Flex>
  );
};

export default Filters;
