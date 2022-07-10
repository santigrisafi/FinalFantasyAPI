import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App  from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="main-container container">
      <div className="text-center">
        <App />
      </div>
    </div>
  </>
);
