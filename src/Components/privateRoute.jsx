import React from "react";
import { Navigate } from "react-router";
const token = localStorage.getItem("token");

const PrivateRoute = ({ children }) => {
  return token ? children : <Navigate replace to="/login" />;
};

export default PrivateRoute;
