import { RoutesEnum } from "@/config/routesEnum";
import { useAuthStore } from "@/stores/authStore";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  redirectPath?: string;
}

export const ProtectedRoute = ({ redirectPath = RoutesEnum.SIGNIN }: Props) => {
  const isAuth = useAuthStore((state) => state.isAuth);

  return isAuth ? <Outlet /> : <Navigate to={redirectPath} />;
};
