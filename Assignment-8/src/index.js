import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {AppContextProvider} from "./contexts/AppContext"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppContextProvider>
    <App />
    </AppContextProvider>
  </StrictMode>
);