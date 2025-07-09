import { RoutesEnum } from "@/config/routesEnum";
import { Courses } from "@/features/courses";
import { Dashboard } from "@/features/dashboard";
import { MainLayout } from "@/layouts";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router basename="/admin">
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path={RoutesEnum.DASHBOARD}
            element={<Dashboard />}
          />
          <Route
            path={RoutesEnum.COURSES}
            element={<Courses />}
          />
        </Route>
      </Routes>
    </Router>
  );
};
