import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");

  // If token exists → Allow access, else → Redirect to login
  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
