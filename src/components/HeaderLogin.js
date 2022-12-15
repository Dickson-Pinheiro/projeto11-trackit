import logoLogin from "../assets/logoLogin.png"
import styled from "styled-components"

export default function HeaderLogin() {
    return (
        <HeaderLoginStyle>
            <img src={logoLogin} alt="trackit" />
        </HeaderLoginStyle>
    )
}

const HeaderLoginStyle = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`