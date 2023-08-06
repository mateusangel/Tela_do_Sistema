import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cadastro } from "../../pages/Cadastro";
import { InputProvider } from "../../Context/InputProvider/InputProvider";
import { Administrator } from "../../pages/Administrator";
import { ContextUserRegiters } from "../../Context/UserContext/ContextUserRegiters";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextUserRegiters>
      <InputProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Administrator" element={<Administrator />} />
            <Route path="/Cadastro" element={<Cadastro />} />
          </Routes>
        </BrowserRouter>
      </InputProvider>
    </ContextUserRegiters>
  </React.StrictMode>
);
