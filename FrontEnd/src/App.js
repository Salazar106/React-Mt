import React from "react";
import { Login, Register } from "./components/login/login";
import { Envios } from "./components/Envios/envios";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BarraNav from "./layouts/nav";

import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BarraNav />}>
            <Route index element={<Login />} />
            <Route path="Envios" element={<Envios />} />
            <Route path="Register" element={<Register />} />

            <Route path="*" element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
