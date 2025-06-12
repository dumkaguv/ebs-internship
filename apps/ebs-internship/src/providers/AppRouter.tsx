import { RoutesEnum } from "@/config/routesEnum";
import { MainLayout } from "@/layouts";
import CourseDetailsPage from "@/pages/CourseDetailsPage";
import CoursesPage from "@/pages/CoursesPage";
import HomePage from "@/pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path={RoutesEnum.HOME}
            element={<HomePage />}
          />
          <Route
            path={RoutesEnum.COURSES}
            element={<CoursesPage />}
          />
          <Route
            path={`${RoutesEnum.COURSES}/:id`}
            element={<CourseDetailsPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
