import { Course, Dashboard, Dollar, Settings } from "@/assets";
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
    getMenuItem(
      "Dashboard",
      <Dashboard stroke="transparent" />,
      RoutesEnum.DASHBOARD
    ),
    getMenuItem(
      "Courses",
      <Course stroke="transparent" />,
      RoutesEnum.COURSES.BASE
    ),
    getMenuItem("Revenue", <Dollar stroke="transparent" />, RoutesEnum.REVENUE),
    getMenuItem(
      "Settings",
      <Settings stroke="transparent" />,
      RoutesEnum.SETTINGS
    ),
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
