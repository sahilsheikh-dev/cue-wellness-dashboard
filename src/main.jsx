import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css";
import { ProgressProvider } from "./components/progresscontext/progresscontext.jsx";
// import "./styles/global.scss"; // or index.css

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProgressProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProgressProvider>
  </React.StrictMode>
);
