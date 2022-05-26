import styled from "styled-components";

import Header from "./subcomponents/Header.js";
import Footer from "./subcomponents/Footer.js";

export default function Historico () {
    return (
        <>
            <Header />
            <Container >

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