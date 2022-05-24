import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import GlobalStyle from "./style/globalStyles.js";
import Login from "./components/Login.js";
import Cadastro from "./components/Cadastro.js";
import Habitos from "./components/Habitos.js";
import Hoje from "./components/Hoje.js";
import Historico from "./components/Historico.js";



export default function App () {


    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/habitos" element={<Habitos />} />
                <Route path="/hoje" element={<Hoje />} />
                <Route path="/historico" element={<Historico />} />
            </Routes>
        </>
    )
}