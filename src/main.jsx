import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";  // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min";  // Bootstrap JS
import "jquery/dist/jquery.min"; // Import jQuery

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
