import { Api, useAuthStore } from "@libs";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

export const useFetchProfileInfo = () => {
  const [setIsAuth, setProfile] = useAuthStore(
    useShallow((state) => [state.setIsAuth, state.setProfile])
  );

  const { data: profile, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: Api.profile.me,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isLoading || !profile) return;

    setIsAuth(true);
    setProfile(profile);
  }, [isLoading, profile, setIsAuth, setProfile]);
};
