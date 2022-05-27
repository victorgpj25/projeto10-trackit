import styled from "styled-components";
import dayjs from "dayjs";

import { useContext } from "react";

import HabitsContext from "../../contexts/HabitsContext";


export default function InfoDia () {

    const diaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const { habitosDiaTotal, habitosDiaConcluidos } = useContext(HabitsContext)

    return (
        <Container>
            <h1>{diaSemana[dayjs().day()]}, {String(dayjs().date()).padStart(2, '0')}/{String(dayjs().month() + 1).padStart(2, '0')}</h1>
            {habitosDiaConcluidos > 0 ? <StyledH2 color="#8FC549">{Math.round((habitosDiaConcluidos / habitosDiaTotal) * 100)}% dos hábitos concluidos</StyledH2> : <StyledH2 color="#BABABA">Nenhum hábito concluído ainda</StyledH2>}
        </Container>
    )
}

const StyledH2 = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: ${props => props.color};

`;

const Container = styled.div`
	width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 4.2vh 0;

    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }

`;