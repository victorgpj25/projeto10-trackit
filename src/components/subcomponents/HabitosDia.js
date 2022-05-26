import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";
import HabitsContext from "../../contexts/HabitsContext";

import HabitoDia from "./HabitoDia.js";

export default function HabitosDia () {

    const { config } = useContext(UserContext)
    const { habitosDia, setHabitosDia, setHabitosDiaTotal, setHabitosDiaConcluidos } = useContext(HabitsContext)

    function getHabitosDia () {

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

        promise.then( resposta => {
            setHabitosDia(resposta.data)
            setHabitosDiaTotal(resposta.data.length)
            setHabitosDiaConcluidos(resposta.data.filter( habito => habito.done).length)
        })

    }



    useEffect(() => {
        getHabitosDia()
	}, []);

    const displayHabitosDia = habitosDia.map( (habito, index) => {
        return (
            <HabitoDia key={index} id={habito.id} name={habito.name} done={habito.done} sequenciaAtual={habito.currentSequence} maiorSequencia={habito.highestSequence} getHabitosDia={getHabitosDia} />

        )
    })

    return (
        <StyledOl>
            {displayHabitosDia}
        </StyledOl>
    )
}


const StyledOl = styled.ol`
    width: 100%;
    height: auto;
    
    display: flex;
    flex-direction: column;
`;

