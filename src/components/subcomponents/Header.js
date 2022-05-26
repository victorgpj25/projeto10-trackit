import styled from "styled-components";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";

export default function Header () {

    const { profileImg, profileName} = useContext(UserContext)

    return (
        <Container>
            <h1>TrackIt</h1>
            <img src={profileImg} alt={profileName} />
        </Container>
    )
}

const Container = styled.div`
	width: 100vw;
    height: 10.5vh;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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
        width: 13.5vw;
        height: 13.5vw;

        border-radius: 98.5px;
    }


`;