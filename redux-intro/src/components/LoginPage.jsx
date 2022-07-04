import React from "react";
import { Login } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginFailed, loginSuccess } from "../Auth/Action";

export const LoginPage = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    if (email === "admin" && password === "admin") {
      dispatch(loginSuccess("fakeToken"));
    } else {
      dispatch(loginFailed("Wrong credentials"));
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return <Login handleLogin={handleLogin} />;
};
