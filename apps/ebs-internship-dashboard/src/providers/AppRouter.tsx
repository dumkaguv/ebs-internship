import { AdminGuardRoute } from "@/components";
import { RoutesEnum } from "@/config/routesEnum";
import { Course } from "@/features/courseDetails";
import { Courses } from "@/features/courses";
import { Dashboard } from "@/features/dashboard";
import { CourseAddPage } from "@/features/course/pages";
import { SettingsPage } from "@/features/settings/pages/SettingsPage";
import { MainLayout } from "@/layouts";
import { NotFoundPage } from "@libs/components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CourseChapterDetails } from "@/features/courseDetails/pages/CourseChapterDetails";
import { RevenuePage } from "@/features/revenue";

export const AppRouter = () => {
  return (
    <Router basename="/admin">
      <Routes>
        <Route element={<AdminGuardRoute />}>
          <Route element={<MainLayout />}>
            <Route
              path={RoutesEnum.DASHBOARD}
              element={<Dashboard />}
            />
            <Route
              path={`${RoutesEnum.COURSES.BASE}/:id`}
              element={<Course />}
            />
            <Route
              path={`${RoutesEnum.CHAPTER}/:id`}
              element={<CourseChapterDetails />}
            />
            <Route
              path={RoutesEnum.COURSES.BASE}
              element={<Courses />}
            />
            <Route
              path={RoutesEnum.COURSES.ADD}
              element={<CourseAddPage />}
            />
            <Route
              path={`${RoutesEnum.COURSES.ADD}/:id`}
              element={<CourseAddPage />}
            />
            <Route
              path={RoutesEnum.SETTINGS}
              element={<SettingsPage />}
            />
            <Route
              path={RoutesEnum.REVENUE}
              element={<RevenuePage />}
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
