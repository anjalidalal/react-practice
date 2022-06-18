import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, handleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ username, password });
  };

  console.log(isAuth);

  return !isAuth ? (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input type="submit" value="Submit" />
    </form>
  ) : (
    <Navigate to={"/users"} replace />
  );
};
