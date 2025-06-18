import { RoutesEnum } from "@/config/routesEnum";
import { MainLayout } from "@/layouts";
import CourseDetailsPage from "@/features/courseDetails/pages/CourseDetailsPage";
import HomePage from "@/features/home/pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUpPage from "@/features/auth/pages/SignUpPage";
import CoursesPage from "@/features/courses/pages/CoursesPage";
import { SignInPage } from "@/features/auth";

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
            path={RoutesEnum.SIGNUP}
            element={<SignUpPage />}
          />
          <Route
            path={RoutesEnum.SIGNIN}
            element={<SignInPage />}
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
