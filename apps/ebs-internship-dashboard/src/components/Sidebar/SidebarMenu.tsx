import { Course, Dashboard, Dollar } from "@/assets";
import { useSidebarStyles } from "./SidebarStyles";
import { NavLink } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";
import { JSX } from "react";
import clsx from "clsx";

interface Props {
  collapsed: boolean;
}

export const SidebarMenu = ({ collapsed }: Props) => {
  const { styles } = useSidebarStyles();

  const getMenuItem = (title: string, icon: JSX.Element, href: string) => ({
    title,
    icon,
    href,
  });

  const items = [
    getMenuItem("Dashboard", <Dashboard />, RoutesEnum.DASHBOARD),
    getMenuItem("Courses", <Course />, RoutesEnum.COURSES),
    getMenuItem("Revenue", <Dollar />, RoutesEnum.REVENUE),
  ];

  return (
    <nav>
      <ul className={styles.menuItemsList}>
        {items.map(({ title, icon, href }) => (
          <li key={title}>
            <NavLink
              to={href}
              className={({ isActive }) =>
                clsx(styles.menuItem, isActive && styles.activeMenuItem)
              }
            >
              {icon}
              {!collapsed && <span>{title}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
