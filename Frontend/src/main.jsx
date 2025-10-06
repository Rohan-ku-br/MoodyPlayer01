import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/global.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DataContext from "./context/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataContext>
        <App />
        <ToastContainer position="top-right" autoClose={3000} />
      </DataContext>
    </BrowserRouter>
  </StrictMode>
);
