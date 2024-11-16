import React from 'react';
import Lottie from 'lottie-react';
import { Suspense } from 'react';
import { lazy, type LazyExoticComponent } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLoader from '~assets/loader.json';
import { ROUTES } from './mapper';

const Routes = () => {
  const LandingPage = lazy(
    () => import('~pages/public/LandingPage/LandingPage')
  )
  const LoginPage = lazy(
    () => import('~pages/public/Login/Login')
  )

  const router = createBrowserRouter([
    {
      path: ROUTES.ROOT,
      element: (<LandingPage />),
    },
    {
      path: ROUTES.LOGIN,
      element: (<LoginPage />),
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
}

export default Routes;
