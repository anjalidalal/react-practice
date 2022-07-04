import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "../components/Home";
import { LoginPage } from "../components/LoginPage";

export const ComponentsRoutes = () => {
  return (
    <>
      <div>
        <Link to="/">TASKS</Link>
        <Link to="/login">LOGIN</Link>
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
