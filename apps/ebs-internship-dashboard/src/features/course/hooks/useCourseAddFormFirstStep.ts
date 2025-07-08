import { Api } from "@libs";
import { useQuery } from "@tanstack/react-query";
import { SelectProps } from "antd";

export const useCourseAddFormFirstStep = () => {
  const { data: categoriesRaw, isLoading: categoriesIsLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: Api.categories.fetchCategories,
  });

  const { data: tagsRaw, isLoading: tagsIsLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: Api.tags.fetchTags,
  });

  const categories: SelectProps["options"] = categoriesRaw?.map(
    ({ id, name }) => ({
      value: id,
      label: name,
    })
  );

  const tags: SelectProps["options"] = tagsRaw?.map(({ id, title }) => ({
    value: id,
    label: title,
  }));

  const languages: SelectProps["options"] = ["en", "ru", "ro", "fr", "pl"].map(
    (lang) => ({
      value: lang,
      label: lang,
    })
  );

  const levels: SelectProps["options"] = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
  ].map((lvl) => ({
    value: lvl.toLowerCase(),
    label: lvl,
  }));

  return {
    categories,
    tags,
    languages,
    levels,
    categoriesIsLoading,
    tagsIsLoading,
  };
};
