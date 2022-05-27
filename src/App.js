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

    const [config, setConfig ] = useState("")

    const [ emailLogin, setEmailLogin ] = useState("")
    const [ senhaLogin, setSenhaLogin ] = useState("")

    const [ profileName ,setProfileName ] = useState("")
    const [ profileImg ,setProfileImg ] = useState("")

    const [ habitosDia, setHabitosDia ] = useState([])
    const [ habitosDiaConcluidos, setHabitosDiaConcluidos ] = useState(0)
    const [ habitosDiaTotal, setHabitosDiaTotal ] = useState(0)

    const [ habitos, setHabitos ] = useState([])

    const [ loading, setLoading ] = useState(true)

    const navigate = useNavigate()

    function verificarLogin () {
        if (config === "") {
            setLoading(true)
            const body = {
                email: localStorage.getItem("email"),
                password: localStorage.getItem("senha")
            }
    
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
    
            promise.then( resposta => {
                setLoading(false)
                setProfileName(resposta.data.name)
                setProfileImg(resposta.data.image)
                setConfig({headers: {Authorization: `Bearer ${resposta.data.token}`}})
                navigate("/")
                }
            )
            promise.catch( err => {
                setLoading(false)
                alert("houve um erro no login")
                }  
            )

        }

    }


    
    return (
        <UserContext.Provider value={{emailLogin, setEmailLogin, senhaLogin, setSenhaLogin, profileImg, setProfileImg, profileName, setProfileName, config, setConfig, verificarLogin, loading, setLoading}}>
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