import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
function RequiresAuth({ children }) {
  const { stateAuth } = useAuth();
  const location = useLocation();
  return stateAuth.loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
export default RequiresAuth;
