import styled from "styled-components";

import HabitoHistorico from "./HabitoHistorico.js"


export default function HabitosHistorico ({ display, setDisplay, dia, habitosDia }) {
    habitosDia = habitosDia.sort((a,b) => b.done - a.done)
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
                <div>
                    <button onClick={() => setDisplay("none")}>Fechar</button>
                </div>
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
    height: 98vh;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;

    border-radius: 20px;
    background: #FFFFFF;

    padding: 0 5vw;
    background-color: #F2F2F2;

    > h1 {
        width: 90vw;
        height: 8vh;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 4;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        background-color: #126BA5;
        color: #FFFFFF;
    }

    ol {
        width: 100%;
        height: 83.5%;

        overflow: scroll;
    }

    > div {
        width: 90vw;
        height: 8vh;

        position: absolute;
        left: 0;
        bottom: 0;

        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

    
        background-color: #FFFFFF;
    }


    button {
        width: 84px;
        height: 35px;

        position: absolute;
        bottom: 1.5vh;
        left: 50%;
        transform: translate(-50%, 0);
        

        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 4;
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