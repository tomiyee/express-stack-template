import { useRoutes } from "react-router-dom";
import mainRoutes from "./mainRoutes";

/**
 * React functional component for rendering the routes.
 *
 * @returns The rendered routes.
 */
const Routes: React.FC = () => {
  return useRoutes([ mainRoutes ]);
}
export default Routes;