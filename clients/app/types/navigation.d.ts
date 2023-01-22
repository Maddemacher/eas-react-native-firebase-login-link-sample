import { AuthenticatedStackRoutes } from "../src/navigation/AuthenticatedStack";
import { NotAuthenticatedStackRoutes } from "../src/navigation/NotAuthenticatedStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NotAuthenticatedStackRoutes, AuthenticatedStackRoutes { }
  }
}
