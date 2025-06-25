import { Breadcrumb, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useBreadcrumbStyles } from "./BreadcrumbsStyles";

interface Props {
  title?: string;
}

export const AppBreadcrumb = ({ title }: Props) => {
  const { styles } = useBreadcrumbStyles();
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbItems = [
    {
      title: (
        <Typography.Title level={5}>
          <Link
            className={styles.breadcrumbTitle}
            to="/"
          >
            Home
          </Link>
        </Typography.Title>
      ),
      key: "home",
    },
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const isLast = index === pathSnippets.length - 1;
      const name = pathSnippets[index].replace(/-/g, " ");
      let route = name.charAt(0).toUpperCase() + name.slice(1);

      if (isLast && title) {
        route = title;
      }

      return {
        title: (
          <Typography.Title level={5}>
            {isLast ? (
              <span className={styles.inactive}>{route}</span>
            ) : (
              <Link
                className={styles.breadcrumbTitle}
                to={url}
              >
                {route}
              </Link>
            )}
          </Typography.Title>
        ),
        key: url,
      };
    }),
  ];

  return (
    <Breadcrumb
      className={styles.customBreadcrumb}
      items={breadcrumbItems}
      separator=">"
    />
  );
};
