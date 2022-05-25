import styled from "styled-components";
import { Link } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer () {
    return (
        <Container>
            <StyledLink to="/habitos">Hábitos</StyledLink>
            <StyledProgressBar to="/hoje">
                <StyledCircularProgressbar value="10" text="Hoje" strokeWidth="12" styles={buildStyles({
                    pathColor: "#FFFFFF",
                    trailColor: "#52B6FF",
                    textSize: "18px", 
                    textColor: "#FFFFFF"
                    })} 
                />
            </StyledProgressBar>
            <StyledLink to="/historico">Histórico</StyledLink>
        </Container>
    )
}

const StyledCircularProgressbar= styled(CircularProgressbar)`
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

const StyledLink = styled(Link)`
    width: auto;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    text-decoration: none;

    color: #52B6FF;
`;

const StyledProgressBar = styled(Link)`
    width: 24vw;
    height: 24vw;

    top: -10vw;
    left: 50%;
    transform: translate(-50%, 0);

    border-radius: 50%;
    padding: 1%;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    text-decoration: none;
    position: absolute;


    background: #52B6FF;
    color: #FFFFFF;;
`;

const Container = styled.div`
	width: 100vw;
    height: 10.5vh;

    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;

	background-color: #FFFFFF;
`;
