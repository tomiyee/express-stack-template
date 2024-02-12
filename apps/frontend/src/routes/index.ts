import { useRoutes } from 'react-router-dom';
import MainRoutes from './mainRoutes';
import ErrorRoutes from './errorRoutes';

/**
 * React functional component for rendering the routes.
 *
 * @returns The rendered routes.
 */
const Routes: React.FC = () => {
  return useRoutes([MainRoutes, ErrorRoutes]);
};
export default Routes;
