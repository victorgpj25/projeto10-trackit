import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";


import UserContext from "../contexts/UserContext";
import Calendar from "react-calendar";
import Header from "./subcomponents/Header.js";
import Footer from "./subcomponents/Footer.js";
import HabitosHistorico from "./subcomponents/HabitosHistorico.js";
import "react-calendar/dist/Calendar.css";

export default function Historico () {

    const { config } = useContext(UserContext)
    const [ historico, setHistorico ] = useState([])
    const [ display, setDisplay ] = useState("none")
    const [ diaSelecionado, setDiaSelecionado ] = useState({})
    const [ habitosDia, setHabitosDia ] = useState([])
    const diaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", config)

        promise.then(resposta => {
            setHistorico(resposta.data)
            
        })

	}, []);

    return (
        <>
            <Header />
            <Container >
                <header>Histórico</header>
                <StyledCalendar 
                    calendarType="US"
                    formatDay={(locale, date) => String(date.getDate()).padStart(2, "0")}
                    onClickDay={(value, event) => {
                        let data = `${String(value.getDate()).padStart(2, "0")}/${String(value.getMonth() + 1).padStart(2, "0")}/${value.getFullYear()}`
                        
                        if (historico.some( dia => dia.day === data)) {
                            setHabitosDia(historico.filter(obj => obj.day === data)[0].habits)
                            setDiaSelecionado({
                                data,
                                dataDisplay: `${diaSemana[value.getDay()]}, ${data}`
                            })
                            setDisplay("flex")
                        }   
                    }}
                    tileClassName={(locale, date) => {
                        let data = `${String(locale.date.getDate()).padStart(2, "0")}/${String(locale.date.getMonth() + 1).padStart(2, "0")}/${locale.date.getFullYear()}`
                        if (historico.some( dia => dia.day === data)) {
                            let dia = historico.filter(obj => obj.day === data)[0]
                            if (dia.habits.some( habito => habito.done === false) && dia.day !== dayjs(date).format("DD/MM/YYYY")) {
                                return "vermelho"
                            } else if (dia.day !== dayjs(date).format("DD/MM/YYYY")){
                                return "verde"
                            } else {
                                return null
                            }

                        } else {
                            return null
                        }
                    }}
                />
                <h2>Selecione um dia com hábitos para visualizá-los</h2>
            </Container>
            <HabitosHistorico display={display} setDisplay={setDisplay} dia={diaSelecionado} habitosDia={habitosDia} />
            <Footer />
        </>
    )
}

const StyledCalendar = styled(Calendar)`
    width: 100%;
    height: 59vh;

    border-radius: 10px;
    border: 0;

    div:last-child button {
        padding: 5px;
        font-size: 16px;
        line-height: 20px;
        border-radius: 15px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    abbr {
        padding: 10px;
        border-radius: 40px;
    }

    .verde abbr {
        background-color: #8FC549;
    }
    .vermelho abbr {
        background-color: #ff4d4d;
    }


`;

const Container = styled.div`
	width: 90vw;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10.5vh 5vw;
    header {
        width: 100%;
        height: auto;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        margin: 4.5vh 0 1.5vh;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }

    h2 {
        width: 100%;
        height: auto;
        text-align: center;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;

        color: #666666;

    }

`;