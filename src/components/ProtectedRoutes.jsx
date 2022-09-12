import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, user }) => {
  if (!user) return <Navigate to="/applied-jobs-dashboard" />;

  return children;
};

export default ProtectedRoutes;
