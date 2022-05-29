import styled from "styled-components";
import { useContext } from "react";

import HabitsContext from "../../contexts/HabitsContext";
import HabitoDia from "./HabitoDia.js";

export default function HabitosDia () {


    const { habitosDia, getHabitosDia } = useContext(HabitsContext)

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