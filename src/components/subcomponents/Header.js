import { useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";


export default function Header () {

    return (
        <Container>
            <h1></h1>
            <img src={profileImg} alt={profileName} />
        </Container>
    )
}

const Container = styled.div`
	width: 100%;
    height: auto;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    padding: 20px 4.8%;

	background-color: #126BA5;


    h1 {
        font-family: "Playball";
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;

        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;

        border-radius: 98.5px;
    }


`;