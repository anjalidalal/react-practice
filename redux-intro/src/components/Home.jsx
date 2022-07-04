import React from "react";
import { Todo } from "./Todo";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div>{token}</div>
      <Todo />
    </>
  );
};
