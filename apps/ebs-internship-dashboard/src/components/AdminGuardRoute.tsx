import { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Spin, Flex } from "antd";
import { Api, LOCAL_STORAGE, URLS, USER_ROLES, useAuthStore } from "@libs";
import { useShallow } from "zustand/shallow";
import { saveTokenToLocalStorage } from "@/utils";
import { useClearSearchParams } from "@/hooks";

export const AdminGuardRoute = () => {
  const [setProfile, setIsAuth] = useAuthStore(
    useShallow((state) => [state.setProfile, state.setIsAuth])
  );

  const [searchParams] = useSearchParams();

  const { access_token, expires_at } = {
    access_token: searchParams.get(LOCAL_STORAGE.ACCESS_TOKEN),
    expires_at: searchParams.get(LOCAL_STORAGE.EXPIRES_AT),
  };

  if (access_token && expires_at) {
    saveTokenToLocalStorage(access_token, expires_at);
  }

  useClearSearchParams();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: Api.profile.me,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (profile) {
      setProfile(profile);
      setIsAuth(true);
    } else if (!isLoading && !profile) {
      setProfile(null);
      setIsAuth(false);
    }
  }, [profile, isLoading, setProfile, setIsAuth]);

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

  const isAdmin = profile?.roles.includes(USER_ROLES.ADMIN_ROLE);
  if (!isAdmin) {
    window.location.href = URLS.PUBLIC_URL;
  }

  return <Outlet />;
};
