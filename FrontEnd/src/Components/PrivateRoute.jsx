import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if (userInfo.isAdmin === true) {
    <Navigate to="/adminDashbord" replace />;
  } else {
    return userInfo ? <Outlet /> : <Navigate to={"/"} replace />;
  }
};

export default PrivateRoute;
