import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "@/features/userProfile/api/fetchUserProfile";
import { UserProfile } from "../components";
import { Outlet } from "react-router-dom";
import { Container } from "@/components";
import { useUserProfilePageStyles } from "./UserProfilePageStyles";

function UserProfilePage() {
  const { styles } = useUserProfilePageStyles();
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchUserProfile,
  });

  console.log(data);

  return (
    <Container className={styles.pageContainer}>
      <UserProfile data={data} />

      <Outlet context={{ data }} />
    </Container>
  );
}

export default UserProfilePage;
