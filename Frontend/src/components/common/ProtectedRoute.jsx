import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Loader from "./Loader";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, loading, setShowLoginModal } = useAuth();

  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      setShowLoginModal(true);
    }
  }, [loading, user, setShowLoginModal]);

  if (loading) return <Loader />;

  if (!user) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
