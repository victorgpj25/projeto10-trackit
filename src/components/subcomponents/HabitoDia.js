import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";
import Check from "../../image/check.png";

export default function HabitoDia ({ id, name, done, sequenciaAtual, maiorSequencia, getHabitosDia }) {

    const { config } = useContext(UserContext)

    function checkHabito () {
        if (done) {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, config)

            promise.then(() => {
                getHabitosDia()
            })
        } else {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, config)

            promise.then(() => {
                getHabitosDia()
            })
        }
       


    }

    return (
        <StyledItem >
            <div>
                <h1>{name}</h1>
                <h2>Sequência atual: { done ? <span>{sequenciaAtual} dias</span> : sequenciaAtual + " dias"}</h2>
                <h2> Seu recorde: { done && maiorSequencia === sequenciaAtual ? <span>{maiorSequencia} dias</span> : maiorSequencia + " dias"}</h2>
            </div>
            <StyledDiv onClick={checkHabito} color={done ? "#8FC549" : "#EBEBEB"}>
                <img src={Check} alt="Checkmark" />
            </StyledDiv>
        </StyledItem>
    )
}

const StyledDiv = styled.div`
    width: 69px;
    height: 69px;

    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.color};
    color: #FFFFFF;

    img {
        width: 36px;
        height: auto;
    }
    
`;

const StyledItem = styled.li`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 3.5vw;
    margin-bottom: 1.5vh;

    background: #FFFFFF;
    border-radius: 5px;

    :last-child {
        margin-bottom: 4vh;
    }

    h1 {
        width: 60vw;
        height: auto;
        word-wrap: break-word;

        margin-bottom: 8px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }

    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666; 
    }

    span {
        color: #8FC549;
    }
`;