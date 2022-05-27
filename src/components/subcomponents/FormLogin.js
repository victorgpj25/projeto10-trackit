import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ThreeDots } from  "react-loader-spinner";
import UserContext from "../../contexts/UserContext";

export default function FormLogin () {

    const {emailLogin, setEmailLogin, senhaLogin, setSenhaLogin, setProfileName, setProfileImg, config, setConfig, loading, setLoading} = useContext(UserContext)
    const navigate = useNavigate()


    useEffect(() => { 
        setLoading(false)
        if (config === "") {
            if (localStorage.length > 0) {
                LogarStorage()
            }
        } else {
            navigate("/hoje")
        }
	}, []);

    function LogarStorage () {
        if (window.confirm("Logar com perfil salvo no dispositivo?")) {
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
                navigate("/hoje")
                }
            )
            promise.catch( err => {
                setLoading(false)
                alert("houve um erro no login")
                }  
            )

        }


    }

    function Logar (event) {
        event.preventDefault()
        setLoading(true)

        const body = {
            email: emailLogin,
            password: senhaLogin
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)

        promise.then( resposta => {
            setLoading(false)
            localStorage.setItem("email", resposta.data.email)
            localStorage.setItem("senha", resposta.data.password)
            setProfileName(resposta.data.name)
            setProfileImg(resposta.data.image)
            setConfig({headers: {Authorization: `Bearer ${resposta.data.token}`}})
            navigate("/hoje")
            }
        )
        promise.catch( err => {
            setLoading(false)
            alert("houve um erro no login")
            }  
        )

    }

    return (
        <Container>
            <form onSubmit={Logar}>
                <input disabled={loading} placeholder="email" type="email" value={emailLogin} onChange={e => setEmailLogin(e.target.value)} />
                <input disabled={loading} placeholder="senha" type="password" value={senhaLogin} onChange={e => setSenhaLogin(e.target.value)} />
                <button type="submit" disabled={!(emailLogin && senhaLogin) || loading}>{loading ? <ThreeDots height="50" width="50" color='white' ariaLabel='loading' /> : "Entrar"}</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
	width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;


    form input {
        width: 100%;
        height: 45px;

        margin: 2% 0 2% 0;
        padding: 0 0 0 10px;

        display: flex;
        align-items: center;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }
    form input:disabled {
        color: #AFAFAF;
        background: #F2F2F2;
    }
    form input::placeholder {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }

    form button {

        width: 100%;
        height: 45px;
    
        background: #52B6FF;
        border-radius: 4.63636px;
        border: 0;
        margin-bottom: 10%;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.04em;
        text-decoration: none;

        color: #FFFFFF;
    }
    form button:disabled {
        opacity: 0.7;
    }
`;
