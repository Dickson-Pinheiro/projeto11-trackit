import styled from "styled-components"

export default function Button({children}){
    return(
        <ButtonSyle>{children}</ButtonSyle>
    )
}

const ButtonSyle = styled.button`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    background-color: #52B6FF;
    color: #ffffff;
    border: none;
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    font-family: Lexend Deca;
`