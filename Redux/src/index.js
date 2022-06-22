import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import App from "./App";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
