import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from  "./subcomponents/Logo.js";
import FormLogin from  "./subcomponents/FormLogin.js";

export default function Login () {
    return (
        <Container>
            <Logo />
            <FormLogin />
            <StyledLink to ="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </Container>
    )
}

const StyledLink = styled(Link)`

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration: none;
    text-decoration-line: underline;

    color: #52B6FF;
`;

const Container = styled.div`
	width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 9.6%;

	background-color: #FFFFFF;
`;
