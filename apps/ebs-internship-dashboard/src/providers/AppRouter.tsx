import { RoutesEnum } from "@/config/routesEnum";
import { MainLayout } from "@/layouts";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router basename="/admin">
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path={RoutesEnum.DASHBOARD}
            element={<div></div>}
          />
        </Route>
      </Routes>
    </Router>
  );
};
