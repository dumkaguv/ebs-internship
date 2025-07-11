import { RoutesEnum } from "@/config/routesEnum";
import { navigateToAdminProfile } from "@/utils";
import { LOCAL_STORAGE, USER_ROLES } from "@libs";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateToProfile = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const isAdmin =
      localStorage.getItem(LOCAL_STORAGE.USER_ROLE) === USER_ROLES.ADMIN_ROLE;

    if (isAdmin) {
      navigateToAdminProfile();
    } else {
      navigate(RoutesEnum.PROFILE.BASE);
    }
  }, [navigate]);
};
