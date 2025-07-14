import { Avatar, Button, Flex, List, Typography } from "antd";
import { useUserProfileSidebarStyles } from "./UserProfileSidebarStyles";
import { Link, useLocation } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";
import { FC } from "react";
import { User } from "@libs/types/user";

interface Props {
  data?: User;
}

const UserProfile: FC<Props> = ({ data }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { styles } = useUserProfileSidebarStyles();

  const profileLinks = [
    { key: "profile", label: "Profile", path: RoutesEnum.PROFILE.BASE },
    { key: "courses", label: "My Courses", path: RoutesEnum.PROFILE.COURSES },
    { key: "teachers", label: "Teachers", path: RoutesEnum.PROFILE.TEACHERS },
    { key: "reviews", label: "My Reviews", path: RoutesEnum.PROFILE.REVIEWS },
    { key: "settings", label: "Settings", path: RoutesEnum.PROFILE.SETTINGS },
  ];

  return (
    <Flex
      vertical
      gap={24}
      className={styles.profileContainer}
    >
      <Flex
        vertical
        align="center"
        justify="center"
        gap={16}
        className={styles.avatarContainer}
      >
        <Avatar
          size={160}
          src={
            data?.avatar ??
            "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg"
          }
        />
        <Typography.Title level={4}>
          {data?.first_name} {data?.last_name}
        </Typography.Title>
        <Button
          block
          className={styles.shareButton}
        >
          Share Profile
          <img
            src="/icons/share.svg"
            alt="shareIcon"
          />
        </Button>
      </Flex>

      <List
        itemLayout="horizontal"
        dataSource={profileLinks}
        renderItem={(item) => (
          <List.Item>
            <Link
              to={item.path}
              type="text"
              className={
                currentPath === item.path
                  ? styles.activeLink
                  : styles.defaultLink
              }
            >
              {item.label}
            </Link>
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default UserProfile;
