import React from "react";
//Tools
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && !user?.token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
