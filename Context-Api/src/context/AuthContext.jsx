import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  const value = { isAuth, toggleAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
