import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Flex, MenuProps, Typography } from "antd";
import { useSortStyles } from "./SortStyles";
import { sortOptionsData, sortOptionsMap } from "./sortConfig";
import { Dispatch, FC, SetStateAction, useState } from "react";
import type { Sort as SortType } from "../../types";

interface Props {
  sort: SortType;
  setSort: Dispatch<SetStateAction<SortType>>;
}
const Sort: FC<Props> = ({ sort, setSort }) => {
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
      <Typography.Text>Sort By</Typography.Text>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <Button
          variant="outlined"
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

export default Sort;
