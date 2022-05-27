import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";
import Trash from "../../image/trash.png";


export default function HabitoUsuario ({ name, id, dias, diasHabito, getHabitos }) {

    const { config} = useContext(UserContext)

    function DeletarHabito () {
        if (window.confirm("Você realmente deseja deletar este hábito?")) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
        
            promise.then( () => {
                getHabitos()
            })
        }
    }

    return (
        <StyledItem>
            <h1>{name}</h1>
            <ol>
                {dias.map((dia, index) => {
                    return (
                        <StyledLi key={index} background={diasHabito.includes(index) ? "#CFCFCF" : "#FFFFFF"} color={diasHabito.includes(index) ? "#FFFFFF" : "#DBDBDB"} borderColor={diasHabito.includes(index) ? "#CFCFCF" : "#D5D5D5"}>{dia}</StyledLi>
                    )
                })}
            </ol>
            <img src={Trash} alt="Deletar" onClick={DeletarHabito} />   
        </StyledItem>
    )
}

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

const StyledItem = styled.li`
    width: 100%;
    height: auto;
    
    position: relative;

    display: flex;
    flex-direction: column;
    padding: 14px;
    margin-bottom: 1.5vh;

    background: #FFFFFF;
    border-radius: 5px;

    h1 {
        width: 60vw;
        height: auto;
        word-wrap: break-word;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;

        margin-bottom: 10px;
    }

    ol {
        display: flex;
    }


    img {
        width: 13px;
        height: auto;

        position: absolute;
        right: 10px;
        top: 10px
    }
`;
