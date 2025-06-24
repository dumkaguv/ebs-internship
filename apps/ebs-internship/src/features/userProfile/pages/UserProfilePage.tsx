import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../api/fetchUserProfile";
import { UserProfile } from "../components";
import { Outlet } from "react-router-dom";
import { Container } from "@/components";

function UserProfilePage() {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchUserProfile,
  });

  console.log(data);

  return (
    <Container
      style={{
        display: "flex",
        gap: 40,
        padding: "40px 0",
        alignItems: "flex-start",
      }}
    >
      <UserProfile data={data} />

      <Outlet context={{ data }} />
    </Container>
  );
}

export default UserProfilePage;
