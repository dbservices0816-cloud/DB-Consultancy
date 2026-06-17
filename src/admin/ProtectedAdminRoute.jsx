import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin");

  if (!isAdmin) {
    return <Navigate to="/admin-login" />;
  }

  return children;
};

export default ProtectedAdminRoute;