import { Pagination } from "antd";
import { usePaginationStyles } from "./PaginationStyles";

interface Props {
  current: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void;
  total: number;
}

export const PaginationComponent = ({
  current,
  pageSize,
  onChange,
  total,
}: Props) => {
  const { styles } = usePaginationStyles();

  return (
    <Pagination
      current={current}
      pageSize={pageSize}
      onChange={onChange}
      defaultCurrent={1}
      total={total}
      className={styles.pagination}
    />
  );
};
