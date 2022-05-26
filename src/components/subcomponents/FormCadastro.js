import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { ThreeDots } from  "react-loader-spinner";

export default function FormCadastro () {

    const [ emailCadastro, setEmailCadastro] = useState("")
    const [ senhaCadastro, setSenhaCadastro] = useState("")
    const [ nomeCadastro, setNomeCadastro] = useState("")
    const [ fotoCadastro, setFotoCadastro] = useState("")
    const [ loading, setLoading] = useState(false)
    const navigate = useNavigate()


    function Cadastrar (event) {
        event.preventDefault()
        setLoading(true)

        const body = {
            email: emailCadastro,
            name: nomeCadastro,
            image: fotoCadastro,
            password: senhaCadastro
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)

        promise.then( resposta => {
            setLoading(false)
            navigate("/")
        }
 
        )
        promise.catch( err => {
            setLoading(false)
            alert("houve um erro no cadastro")
            }  
        )
    }
    

    return (
        <Container>
            <form onSubmit={Cadastrar}>
                <input disabled={loading} placeholder="email" type="email" value={emailCadastro} onChange={e => setEmailCadastro(e.target.value)} />
                <input disabled={loading} placeholder="senha" type="password" value={senhaCadastro} onChange={e => setSenhaCadastro(e.target.value)} />
                <input disabled={loading} placeholder="nome" type="text" value={nomeCadastro} onChange={e => setNomeCadastro(e.target.value)} />
                <input disabled={loading} placeholder="foto" type="url" value={fotoCadastro} onChange={e => setFotoCadastro(e.target.value)} />
                <button type="submit" disabled={!(emailCadastro && senhaCadastro && nomeCadastro && fotoCadastro) || loading}>{loading ? <ThreeDots height="50" width="50" color='white' ariaLabel='loading' /> : "Cadastrar"}</button>
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