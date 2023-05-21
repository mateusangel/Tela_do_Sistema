import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cadastro } from "../../pages/Cadastro";
import { InputProvider } from "../../Context/InputProvider/InputProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InputProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </InputProvider>
  </React.StrictMode>
);
