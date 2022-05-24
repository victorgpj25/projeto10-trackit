import styled from "styled-components";

export default function FormLogin () {

    return (
        <Container>
            <form onSubmit={Cadastrar}>
                <input placeholder="email" type="email" value={email} onChange={e => setEmailLogin(e.target.value)} />
                <input placeholder="senha" type="password" value={senhaLogin} onChange={e => setSenhaLogin(e.target.value)} />
                <button type="submit" disabled={!(emailLogin && senhaLogin)}>Entrar</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
	width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;


    form input {
        width: 100%;
        height: 45px;

        margin: 2% 0 4% 0;
        padding: 0 0 0 10px;

        display: flex;
        align-items: center;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #000000;
    }
    form input::placeholder {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }

    form button {

        width: 100%;
        height: 45px;
    

        background: #E8833A;
        border-radius: 3px;
        border: 0;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.04em;
        text-decoration: none;

        color: #FFFFFF;
    }
`;
