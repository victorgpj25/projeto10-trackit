import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import HabitsContext from "./contexts/HabitsContext"
import GlobalStyle from "./style/globalStyles.js";
import Login from "./components/Login.js";
import Cadastro from "./components/Cadastro.js";
import Habitos from "./components/Habitos.js";
import Hoje from "./components/Hoje.js";
import Historico from "./components/Historico.js";



export default function App () {

    const [config, setConfig ] = useState("")

    const [ emailLogin, setEmailLogin ] = useState("")
    const [ senhaLogin, setSenhaLogin ] = useState("")

    const [ profileName ,setProfileName ] = useState("")
    const [ profileImg ,setProfileImg ] = useState("")

    const [ habitosDia, setHabitosDia ] = useState([])
    const [ habitosDiaConcluidos, setHabitosDiaConcluidos ] = useState(0)
    const [ habitosDiaTotal, setHabitosDiaTotal ] = useState(0)

    const [ habitos, setHabitos ] = useState([])


    
    return (
        <UserContext.Provider value={{emailLogin, setEmailLogin, senhaLogin, setSenhaLogin, profileImg, setProfileImg, profileName, setProfileName, config, setConfig}}>
            <HabitsContext.Provider value ={{habitosDiaTotal, setHabitosDiaTotal, habitosDiaConcluidos, setHabitosDiaConcluidos, habitosDia, setHabitosDia, habitos, setHabitos}}>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                    <Route path="/historico" element={<Historico />} />
                </Routes>
            </HabitsContext.Provider>
        </UserContext.Provider>
    )
}