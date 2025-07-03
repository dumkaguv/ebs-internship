import { AdminGuardRoute } from "@/components";
import { RoutesEnum } from "@/config/routesEnum";
import { CourseAddPage } from "@/features/course/pages";
import { SettingsPage } from "@/features/settings/pages/SettingsPage";
import { MainLayout } from "@/layouts";
import { NotFoundPage } from "@libs/components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router basename="/admin">
      <Routes>
        <Route element={<AdminGuardRoute />}>
          <Route element={<MainLayout />}>
            <Route
              path={RoutesEnum.DASHBOARD}
              element={<div></div>}
            />
            <Route
              path={RoutesEnum.COURSES.ADD}
              element={<CourseAddPage />}
            />
            <Route
              path={RoutesEnum.SETTINGS}
              element={<SettingsPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
