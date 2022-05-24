import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from  "./subcomponents/Logo.js";
import FormCadastro from  "./subcomponents/FormCadastro.js";

export default function Cadastro () {
    return (
        <Container>
            <Logo />
            <FormCadastro />
            <StyledLink to ="/">Já tem uma conta? Faça login!</StyledLink>
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