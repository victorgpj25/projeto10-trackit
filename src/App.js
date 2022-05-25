import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "./contexts/UserContext";
import GlobalStyle from "./style/globalStyles.js";
import Login from "./components/Login.js";
import Cadastro from "./components/Cadastro.js";
import Habitos from "./components/Habitos.js";
import Hoje from "./components/Hoje.js";
import Historico from "./components/Historico.js";



export default function App () {

    const [ emailLogin, setEmailLogin ] = useState("")
    const [ senhaLogin, setSenhaLogin ] = useState("")
    const [ profileName ,setProfileName ] = useState("")
    const [ profileImg ,setProfileImg ] = useState("")
    const [token, setToken ] = useState("")
    const navigate = useNavigate()

    function Logar (event) {
        event.preventDefault()

        const body = {
            email: emailLogin,
            password: senhaLogin
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)

        promise.then( resposta => {
            setProfileName(resposta.data.name)
            setProfileImg(resposta.data.image)
            setToken(resposta.data.token)
            navigate("/hoje")
        }
  

            
        )
        promise.catch( err => {
            console.log(err)
            alert("houve um erro no cadastro")
            }  
        )

    }
    

    return (
        <UserContext.Provider value={{emailLogin, setEmailLogin, senhaLogin, setSenhaLogin, Logar, profileImg, profileName, token}}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/habitos" element={<Habitos />} />
                <Route path="/hoje" element={<Hoje />} />
                <Route path="/historico" element={<Historico />} />
            </Routes>
        </UserContext.Provider>
    )
}