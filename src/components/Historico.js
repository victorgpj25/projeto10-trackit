import styled from "styled-components";

import Header from "./subcomponents/Header.js";
import Footer from "./subcomponents/Footer.js";

export default function Historico () {
    return (
        <Container >
            <Header />
            <Footer />
        </Container >
    )
}

const Container = styled.div`
	width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;

	background-color: #F2F2F2;
`;