import React from "react";
import { Login } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { axios } from "axios";
import { loginFailed, loginRequest, loginSuccess } from "../Auth/Action";

export const LoginPage = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    dispatch(loginRequest());
    axios
      .post("https://reqeres.in/api/login", {
        email,
        password,
      })
      .then((res) => {
        dispatch(loginSuccess(res.data.action));
      })
      .catch((err) => {
        dispatch(loginFailed(err.message));
      });
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return <Login handleLogin={handleLogin} />;
};
