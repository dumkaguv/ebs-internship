import { Pagination, PaginationProps } from "antd";
import { usePaginationStyles } from "./PaginationStyles";

interface Props extends PaginationProps {
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
  ...rest
}: Props) => {
  const { styles } = usePaginationStyles();

  return (
    <Pagination
      {...rest}
      current={current}
      pageSize={pageSize}
      onChange={onChange}
      defaultCurrent={1}
      total={total}
      className={styles.pagination}
    />
  );
};
