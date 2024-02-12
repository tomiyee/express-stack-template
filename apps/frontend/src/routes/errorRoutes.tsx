import { lazy } from 'react';
import Loadable from './Loadable';

const Page404 = Loadable(lazy(() => import('../views/Page404')));

const ErrorRoutes = {
  path: '*',
  element: <Page404 />,
};
export default ErrorRoutes;
