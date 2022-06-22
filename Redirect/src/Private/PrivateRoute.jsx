import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, navigatePath }) => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  return isAuth ? children : <Navigate to={navigatePath} />;
};

export default PrivateRoute;
