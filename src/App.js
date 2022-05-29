import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "./contexts/UserContext";
import HabitsContext from "./contexts/HabitsContext"
import GlobalStyle from "./style/globalStyles.js";
import Login from "./components/Login.js";
import Cadastro from "./components/Cadastro.js";
import Habitos from "./components/Habitos.js";
import Hoje from "./components/Hoje.js";
import Historico from "./components/Historico.js";



export default function App () {

    const [config, setConfig ] = useState({headers: {Authorization: `Bearer ${localStorage.getItem("config")}`}} || "")

    const [ emailLogin, setEmailLogin ] = useState("")
    const [ senhaLogin, setSenhaLogin ] = useState("")

    const [ profileName ,setProfileName ] = useState(localStorage.getItem("profileName") || "")
    const [ profileImg ,setProfileImg ] = useState(localStorage.getItem("profileImg") || "")

    const [ habitosDia, setHabitosDia ] = useState([])
    const [ habitosDiaConcluidos, setHabitosDiaConcluidos ] = useState(0)
    const [ habitosDiaTotal, setHabitosDiaTotal ] = useState(0)

    const [ habitos, setHabitos ] = useState([])

    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate()

    function getHabitosDia () {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

        promise.then( resposta => {
            setHabitosDia(resposta.data)
            setHabitosDiaTotal(resposta.data.length)
            setHabitosDiaConcluidos(resposta.data.filter( habito => habito.done).length)
        })
        promise.catch( () => {
            alert("Houve um erro com os dados do usuário, retornando para tela de login")
            navigate("/")

        })

    }


    return (
        <UserContext.Provider value={{emailLogin, setEmailLogin, senhaLogin, setSenhaLogin, profileImg, setProfileImg, profileName, setProfileName, config, setConfig, loading, setLoading}}>
            <HabitsContext.Provider value ={{habitosDiaTotal, setHabitosDiaTotal, habitosDiaConcluidos, setHabitosDiaConcluidos, habitosDia, setHabitosDia, habitos, setHabitos, getHabitosDia}}>
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