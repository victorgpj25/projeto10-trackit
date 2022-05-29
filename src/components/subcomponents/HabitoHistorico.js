import styled from "styled-components";

import Check from "../../image/check.png";
import Xmark from "../../image/x.png";

export default function HabitoHistorico ({ nome, done }) {
    return (
        <StyledItem>
            <h1>{nome}</h1>
            <StyledDiv color={done ? "#8FC549" : "#ff4d4d"}>
                {done ? <img src={Check} alt="Checkmark" /> : <img src={Xmark} alt="X" />}
            </StyledDiv>          
        </StyledItem>
    )
}

const StyledItem = styled.li`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2vw;
    margin: 1.5vh 0 1.5vh;

    border-radius: 10px;
    border: 1px solid #e3e3e3;
    background-color: #FFFFFF;

    :first-child {
        margin-top: 2vh;
    }

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
    }
`;

const StyledDiv = styled.div`
    width: 10vw;
    height: 10vw;

    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.color};
    color: #FFFFFF;

    img {
        width: 80%;
        height: auto;
    }
    
`;