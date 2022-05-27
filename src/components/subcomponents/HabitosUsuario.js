import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";
import HabitoUsuario from "./HabitoUsuario.js";
import { ThreeDots } from  "react-loader-spinner";

export default function HabitosUsuario () {

    const { config, loading, setLoading } = useContext(UserContext)
    const [ displayTemplate, setDisplayTemplate ] = useState(false)
    const [ numHabitos, setNumHabitos ] = useState(0)
    const [ habitos, setHabitos ] = useState([])
    const [ nomeHabito, setNomeHabito ] = useState("")
    const [ diasHabito, setDiasHabito ] = useState([])
    const dias = ["D", "S", "T", "Q", "Q", "S", "S"]

    function getHabitos () {

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)

        promise.then( resposta => {
            setHabitos(resposta.data)
            setNumHabitos(resposta.data.length)
        })

    }

    function AdicionarHabito () {
        setLoading(true)
        const body = {
            name: nomeHabito,
            days: diasHabito
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)

        promise.then( () => {
            setLoading(false)
            setDisplayTemplate(false)
            setNomeHabito("")
            setDiasHabito([])
            getHabitos()
        })

    }

    useEffect(() => {
        if (!loading) {
            getHabitos()
        }
        
	}, []);

    const displayHabitos = habitos.map( (habito, index) => {
        return (
            <HabitoUsuario key={index} name={habito.name} id={habito.id} dias={dias} diasHabito={habito.days} getHabitos={getHabitos} />
        )
    })

    return (
        <Container>
            <header>
                <h1>Meus hábitos</h1>
                <div onClick={() => {
                    setDisplayTemplate(true)
                    }}>+</div>
            </header>
            {displayTemplate ? 
            <Template>
                <input disabled={loading} placeholder="nome do hábito" value={nomeHabito} onChange={e => setNomeHabito(e.target.value)} />
                <ol>
                    {dias.map((dia, index) => {
                            return (
                                <StyledLi 
                                    key={index}
                                    onClick={
                                        () => {
                                            if (!(diasHabito.includes(index))) {
                                                setDiasHabito([...diasHabito, index])
                                            } else {
                                                setDiasHabito(diasHabito.filter( dia => dia !== index))
                                            }
                                            diasHabito.sort()
                                        }
                                    } 
                                    background={diasHabito.includes(index) ? "#CFCFCF" : "#FFFFFF"} 
                                    color={diasHabito.includes(index) ? "#FFFFFF" : "#DBDBDB"} 
                                    borderColor={diasHabito.includes(index) ? "#CFCFCF" : "#D5D5D5"}
                                >
                                    {dia}
                                </StyledLi>
                            )
                    })}
                </ol>
                <section>
                    <button disabled={loading} onClick={() => setDisplayTemplate(false)}>Cancelar</button>
                    <button disabled={!(nomeHabito && diasHabito.length > 0) || loading}onClick={AdicionarHabito}>{loading ? <ThreeDots height="30" width="50" color='white' ariaLabel='loading' /> : "Salvar"}</button>
                </section>
            </Template>
            : null}
            <ol>
                {displayHabitos}
            </ol>
            {numHabitos > 0 ? null : <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>}
        </Container>
    )
}

const Template = styled.div`
    width: 100%;
    height: auto;

    margin: 4.2vh 0 0;
    padding: 18px 18px 15px;

    background: #FFFFFF;
    border-radius: 5px;

    input {
        width: 100%;
        height: 45px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 0 10px 0;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }
    input:disabled {
        color: #AFAFAF;
        background: #F2F2F2;
    }
    input::placeholder {
        color: #DBDBDB;
    }

    ol {
        display: flex;

        margin-top: 8px;

    }

    section {
        width: 100%;
        height: auto;

        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    button {
        border: 0;
        margin: 25px 0 0 25px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #52B6FF;
        background: #FFFFFF;
    }
    button:disabled {
        opacity: 0.7;
    }
    button:last-child {
        width: 84px;
        height: 35px;

        border-radius: 4.63636px;
        color: #FFFFFF;
        background: #52B6FF;
    }

`;

const StyledLi = styled.li`
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 5px;

    background: ${props => props.background};
    border: 1px solid ${props => props.borderColor};
    border-radius: 5px;
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: ${props => props.color};
`;


const Container = styled.div`
	width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;

    header {
        width: 100%;
        height: auto;

        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 4.2vh 0 0;
    }

    header h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }

    header div {
        width: 10.5vw;
        height: 9.3vw;

        display: flex;
        justify-content: center;
        align-items: center;

        background: #52B6FF;
        border-radius: 4.63636px;
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;

        color: #FFFFFF;
    }

    h2 {
        margin: 4.2vh 0 0;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }

    > ol {
        margin: 4.2vh 0 0;
        
    }
`;