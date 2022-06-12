import React, { createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    return(
       <AppContext.Provider value={"text"} >{children}</AppContext.Provider>
    )
}
