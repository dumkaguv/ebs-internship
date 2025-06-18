import { RoutesEnum } from "@/config/routesEnum";
import { MainLayout } from "@/layouts";
import CourseDetailsPage from "@/features/courseDetails/pages/CourseDetailsPage";
import HomePage from "@/features/home/pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SignInPage, SignUpPage } from "@/features/auth";
import MentorPage from "@/features/mentorPage/pages/MentorPage";
import CoursesPage from "@/features/courses/pages/CoursesPage";

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
          <Route
            path={`${RoutesEnum.MENTORS}/:id`}
            element={<MentorPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
