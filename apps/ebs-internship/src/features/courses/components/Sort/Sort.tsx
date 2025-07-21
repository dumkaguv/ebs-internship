import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Flex, MenuProps, Typography } from "antd";
import { useSortStyles } from "./SortStyles";
import { sortOptionsData, sortOptionsMap } from "./sortConfig";
import { Dispatch, SetStateAction, useState } from "react";
import type { Sort as SortType } from "@/features/courses/types";

interface Props {
  sort: SortType;
  title?: string;
  isLoading?: boolean;
  setSort: Dispatch<SetStateAction<SortType>>;
}

export const Sort = ({
  sort,
  title = "Sort By",
  isLoading,
  setSort,
}: Props) => {
  const { styles } = useSortStyles();

  const [isOpen, setIsOpen] = useState(false);

  const items: MenuProps["items"] = sortOptionsData.map((option) => ({
    label: <Typography.Text>{option.name}</Typography.Text>,
    key: option.key,
    onClick: () =>
      setSort(() => ({
        sortBy: option.sortBy,
        sortOrder: option.order,
      })),
  }));

  return (
    <Flex
      gap={15}
      align="center"
    >
      {Boolean(title) && <Typography.Text>{title}</Typography.Text>}
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <Button
          variant="outlined"
          disabled={isLoading}
          className={styles.buttonSort}
        >
          {sortOptionsMap[`${sort.sortBy}_${sort.sortOrder}`]}
          <span
            style={{
              transition: "transform 0.3s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <DownOutlined />
          </span>
        </Button>
      </Dropdown>
    </Flex>
  );
};
