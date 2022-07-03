import React from "react";
import { Todo } from "./Todo";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return <Todo />;
};
