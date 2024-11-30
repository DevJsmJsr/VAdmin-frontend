import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLoader from "~assets/loader.svg";
import { ROUTES } from "~constants/appRoutes";
import PrivateRoute from "./private/PrivateRoute";
import PublicRoute from "./public/PublicRoute";
import { Loader2 } from "lucide-react";

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
  const CarMaintenance= lazy(() => import("~pages/private/CarMaintenance/CarMaintenance"));

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
          path: ROUTES.SCAN_CARD,
          element: (
            <PrivateRoute module={{ title: "routes.scan_card" }}>
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
        {
          path: ROUTES.CAR_MAINTENANCE,
          element: (
            <PrivateRoute module={{ title: "routes.car_maintenance" }}>
              <CarMaintenance/>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <Suspense
      fallback={
        <div className="loadingContainer flex flex-col">
          <img
            src={AppLoader}
            alt="vadmin logo"
            className="w-[18rem] h-24"
          />
          <Loader2 size={70} color="white" className="animate-spin"/>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
