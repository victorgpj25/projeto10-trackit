import styled from "styled-components";

import HabitoHistorico from "./HabitoHistorico.js"


export default function HabitosHistorico ({ display, setDisplay, dia, habitosDia }) {
    const displayHabitos = habitosDia.map( (habito, index) => {
        return (
            <HabitoHistorico key={index} nome={habito.name} done={habito.done} />
        )
    })
    
    return (
        <Background display={display}>
            <Container>
                <h1>{dia.dataDisplay}</h1>
                <ol>
                    {displayHabitos}
                </ol>
                <button onClick={() => setDisplay("none")}>Fechar</button>
            </Container>
        </Background>
    )

}

const Background = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    
    display: ${props => props.display};
    justify-content: center;
    align-items: center;

    background: rgba(0,0,0,0.5);
`;

const Container = styled.div`
    width: 90vw;
    height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 20px;
    background: #FFFFFF;

    padding: 5vw;

    > h1 {
        margin-bottom: 5vh;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #52B6FF;
    }

    ol {
        width: 100%;
        height: 80%;

        overflow: scroll;
    }


    button {
        width: 84px;
        height: 35px;

        position: absolute;
        bottom: 8vh;
        left: 50%;
        transform: translate(-50%, 0);
        

        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;

        border-radius: 4.63636px;
        color: #FFFFFF;
        background: #52B6FF;
    }

    

`;