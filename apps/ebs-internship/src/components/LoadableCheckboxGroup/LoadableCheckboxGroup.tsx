import { Button, Checkbox, Flex, Input, Typography } from "antd";
import { FC, useMemo, useState } from "react";
import { ArrowDownOutlined, SearchOutlined } from "@ant-design/icons";
import { useQueryUrlParams } from "@/hooks";
import { useSearchParams } from "react-router-dom";

type FilterItem = {
  id: number;
  name: string;
};

interface Props {
  items: FilterItem[];
  urlParam: string;
  defaultShowCount?: number;
  loadPerButtonClick?: number;
  showSearch?: boolean;
}

const LoadableCheckboxGroup: FC<Props> = ({
  items,
  urlParam,
  showSearch,
  defaultShowCount = 5,
  loadPerButtonClick = 8,
}) => {
  const [searchParams] = useSearchParams();

  const [checkedValues, setCheckedValues] = useState<number[]>(
    searchParams.get(urlParam)?.split(",").map(Number) ?? []
  );
  const [showCount, setShowCount] = useState(defaultShowCount);
  const [searchValue, setSearchValue] = useState("");

  const filteredCheckboxes = searchValue
    ? items.filter((item) =>
        item.name
          .toLowerCase()
          .trim()
          .includes(searchValue.toLowerCase().trim())
      )
    : items;

  useQueryUrlParams(
    useMemo(() => ({ [urlParam]: checkedValues }), [urlParam, checkedValues])
  );

  return (
    <Flex
      vertical
      gap={24}
    >
      {showSearch && (
        <Input
          prefix={<SearchOutlined />}
          allowClear
          placeholder="e.g. Art"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      )}

      <Flex
        gap={14}
        align="start"
        vertical
      >
        <Flex
          gap={14}
          vertical
        >
          {filteredCheckboxes.length > 0 ? (
            filteredCheckboxes.slice(0, showCount).map((item) => (
              <Checkbox
                key={item.id}
                checked={checkedValues.includes(item.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCheckedValues((prev) => [...prev, item.id]);
                  } else {
                    setCheckedValues((prev) =>
                      prev.filter((id) => id !== item.id)
                    );
                  }
                }}
              >
                {item.name}
              </Checkbox>
            ))
          ) : (
            <Typography.Text type="danger">
              Nothing found. Try to type anything else.
            </Typography.Text>
          )}
        </Flex>
        {showCount < filteredCheckboxes.length && (
          <Button
            onClick={() =>
              setShowCount(
                (prev) =>
                  prev +
                  Math.min(
                    Math.abs(filteredCheckboxes.length - loadPerButtonClick),
                    loadPerButtonClick
                  )
              )
            }
            icon={<ArrowDownOutlined />}
            iconPosition="end"
            color="blue"
            variant="text"
          >
            See More
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default LoadableCheckboxGroup;
