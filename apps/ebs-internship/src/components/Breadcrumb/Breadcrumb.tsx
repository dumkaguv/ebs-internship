import { Breadcrumb, Typography } from "antd";
import { Link } from "react-router-dom";
import { FC } from "react";
import styles from "./breadcrumb.module.scss";

interface Props {
  location: string;
  title?: string;
}

const AppBreadcrumb: FC<Props> = ({ location, title }) => {
  const pathSnippets = location.split("/").filter((i) => i);

  console.log(location);

  const breadcrumbItems = [
    {
      title: (
        <Typography.Title level={4}>
          <Link to="/">Home</Link>
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
          <Typography.Title level={4}>
            <Link to={url}>{route}</Link>
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

export default AppBreadcrumb;
