import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { GeneralContextProvider } from "./context/GeneralContext";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GeneralContextProvider>
        <App />
      </GeneralContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
