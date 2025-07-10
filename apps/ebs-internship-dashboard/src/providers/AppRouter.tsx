import { RoutesEnum } from "@/config/routesEnum";
import { Course } from "@/features/courseDetails";
import { CourseChapterDetails } from "@/features/courseDetails/pages/CourseChapterDetails";
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
            path={`${RoutesEnum.COURSES}/:id`}
            element={<Course />}
          />
          <Route
            path={`${RoutesEnum.CHAPTER}/:id`}
            element={<CourseChapterDetails />}
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
