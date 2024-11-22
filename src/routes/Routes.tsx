import React from "react";
import Lottie from "lottie-react";
import { Suspense } from "react";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLoader from "~assets/loader.json";
import { ROUTES } from "~constants/appRoutes";
import PrivateRoute from "./private/PrivateRoute";
import PublicRoute from "./public/PublicRoute";

const Routes = () => {
  const LandingPage = lazy(
    () => import("~pages/public/LandingPage/LandingPage")
  );
  const LoginPage = lazy(() => import("~pages/public/Login/Login"));
  const PrivateLayout = lazy(
    () => import("~layouts/PrivateLayout/PrivateLayout")
  );

  const Home = lazy(() => import("~pages/private/Home/Home"));

  const router = createBrowserRouter([
    {
      path: ROUTES.ROOT,
      element: (
        <PublicRoute>
          <LandingPage />
        </PublicRoute>
      ),
    },
    {
      path: ROUTES.LOGIN,
      element: (
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      ),
    },
    {
      path: ROUTES.PLATFORM,
      element: <PrivateLayout />,
      children: [
        {
          path: ROUTES.PLATFORM,
          element: (
            <PrivateRoute module={{ title: "routes.home" }}>
              <Home />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <Suspense
      fallback={
        <div className="loadingContainer">
          <Lottie animationData={AppLoader} loop={true} />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
