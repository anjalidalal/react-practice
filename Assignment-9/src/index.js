import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { store } from "./Redux/store";
import App from "./App";
import "./Style.css";
import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>
);
