import { useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";

import UserContext from "../contexts/UserContext";
import Header from "./subcomponents/Header.js";
import Footer from "./subcomponents/Footer.js";
import HabitosUsuario from "./subcomponents/HabitosUsuario.js";

export default function Habitos () {

    const { verificarLogin } = useContext(UserContext)

    useEffect(() => {
        verificarLogin()
	}, []);

    return (
        <>
            <Header />
            <Container >
                <HabitosUsuario />
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
	width: 90vw;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10.5vh 5vw;

`;