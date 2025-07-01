import { RoutesEnum } from "@/config/routesEnum";
import { MainLayout } from "@/layouts";
import { CourseDetailsPage } from "@/features/courseDetails";
import { HomePage } from "@/features/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SignInPage, SignUpPage } from "@/features/auth";

import { MentorPage } from "@/features/mentorPage";
import { CoursesPage } from "@/features/courses";
import { CartPage } from "@/features/cart";
import { ProtectedRoute } from "@/components";

import { UserProfilePage } from "@/features/userProfile/pages/UserProfilePage";
import { UserProfileForm } from "@/features/userProfile/components";

export const AppRouter = () => {
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
          <Route element={<ProtectedRoute />}>
            <Route
              path={RoutesEnum.CART}
              element={<CartPage />}
            />
            <Route
              path={RoutesEnum.PROFILE.BASE}
              element={<UserProfilePage />}
            >
              <Route
                path={RoutesEnum.PROFILE.BASE}
                element={<UserProfileForm />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
