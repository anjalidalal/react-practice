import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { About } from "./About";
import { Users } from "./Users";
import { UsersPage } from "./UsersPage";
import { Contact } from "./Contact";

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" exact element={<Users />} />
        <Route path="/users/:id" element={<UsersPage />} />
        <Route path="/contact-us" exact element={<Contact />} />
      </Routes>
    </>
  );
};

export default Router;
