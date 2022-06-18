import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { User } from "./components/User";
import { UsersPage } from "./components/UsersPage";
import { Login } from "./components/Login";

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" exact element={<User />} />
        <Route path="/users/:id" element={<UsersPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
