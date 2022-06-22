import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Users } from "./components/Users";
import { UserPage } from "./components/UserPage";
import { Login } from "./components/Login";
import PrivateRoute from "../src/Private/PrivateRoute";

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/users"
          element={
            <PrivateRoute navigatePath={"/login"}>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute navigatePath={"/users/:id"}>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
