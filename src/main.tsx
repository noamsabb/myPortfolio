import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Layout } from "./Components/layoutArea/Layout/Layout.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
);
