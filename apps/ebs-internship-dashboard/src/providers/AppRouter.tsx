import { RoutesEnum } from "@/config/routesEnum";
import { CourseAddPage } from "@/features/course/pages";
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
          <Route
            path={RoutesEnum.COURSES.ADD}
            element={<CourseAddPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};
