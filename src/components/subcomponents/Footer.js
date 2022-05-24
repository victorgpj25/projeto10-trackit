import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <Container>
            <StyledLink to="/habitos"></StyledLink>
            <ProgressBar></ProgressBar>
            <StyledLink to="/historico"></StyledLink>
        </Container>
    )
}

const StyledLink = styled(Link)`
    width: auto;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
`;

const Container = styled.div`
	width: 100%;
    height: auto;

    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    padding: 20px 9.6%;

	background-color: #FFFFFF;
`;

const ProgressBar = styled.div`
    background-color: #52B6FF;


`;