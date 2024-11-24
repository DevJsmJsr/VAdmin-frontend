import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLoader from "~assets/loader.svg";
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
  const CarChecking = lazy(() => import("~pages/private/CarChecking/CarChecking"));
  const ListCar = lazy(() => import("~pages/private/ListCars/ListCars"));

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
        {
          path: ROUTES.CAR_CHECKING,
          element: (
            <PrivateRoute module={{ title: "routes.car_checking" }}>
              <CarChecking />
            </PrivateRoute>
          ),
        },
        {
          path: ROUTES.LIST_CARS,
          element: (
            <PrivateRoute module={{ title: "routes.car_checking" }}>
              <ListCar/>
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
          <img
            src={AppLoader}
            alt="vadmin logo"
            className="w-[18rem] h-24"
          />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
