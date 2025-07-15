import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "@/features/userProfile/api/fetchUserProfile";
import { UserProfileSidebar } from "@/features/userProfile/components/UserProfileSidebar";
import { Outlet } from "react-router-dom";
import { Container } from "@/components";
import { useUserProfilePageStyles } from "./UserProfilePageStyles";
import { useNavigateToProfile } from "@/hooks";
import { Flex, Spin } from "antd";

export const UserProfilePage = () => {
  useNavigateToProfile();

  const { styles } = useUserProfilePageStyles();

  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchUserProfile,
  });

  if (isLoading) {
    return (
      <Flex
        justify="center"
        align="center"
        style={{ height: "100vh" }}
      >
        <Spin size="large" />
      </Flex>
    );
  }

  return (
    <Container className={styles.pageContainer}>
      <UserProfileSidebar data={data} />

      <Outlet context={{ data }} />
    </Container>
  );
};
