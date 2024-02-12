import { lazy } from 'react';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Loadable from './Loadable';

const LandingPage = Loadable(lazy(() => import('../views/LandingPage')));
const DashboardView = Loadable(lazy(() => import('../views/DashboardView')));
const LoginView = Loadable(lazy(() => import('../views/LoginView')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/dashboard',
      element: <DashboardView />,
    },
    {
      path: '/login',
      element: <LoginView />,
    },
  ],
};
export default MainRoutes;
