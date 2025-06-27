import { Api } from "@libs";
import { useQuery } from "@tanstack/react-query";
import { SelectProps } from "antd";

export const useCourseAddFormFirstStep = () => {
  const { data: categoriesRaw, isLoading: categoriesIsLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: Api.categories.fetchCategories,
  });

  const categories: SelectProps["options"] = categoriesRaw?.map(({ name }) => ({
    value: name.trim().toLowerCase(),
    label: name,
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
    languages,
    levels,
    categoriesIsLoading,
  };
};
