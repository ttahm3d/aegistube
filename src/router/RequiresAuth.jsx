import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function () {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
}
