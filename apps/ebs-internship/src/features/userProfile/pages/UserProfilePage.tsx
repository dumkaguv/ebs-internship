import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "@/features/userProfile/api/fetchUserProfile";
import { UserProfileSidebar } from "@/features/userProfile/components/UserProfileSidebar";
import { Outlet } from "react-router-dom";
import { Container } from "@/components";
import { useUserProfilePageStyles } from "./UserProfilePageStyles";

function UserProfilePage() {
  const { styles } = useUserProfilePageStyles();
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchUserProfile,
  });

  return (
    <Container className={styles.pageContainer}>
      <UserProfileSidebar data={data} />

      <Outlet context={{ data }} />
    </Container>
  );
}

export default UserProfilePage;
