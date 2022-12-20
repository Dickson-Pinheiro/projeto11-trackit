import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"

export default function Button({ children, loadding }) {
    return (
        <>
            {
               loadding ?  <ButtonSyle><ThreeDots color="#ffffff" width={60}/></ButtonSyle> : <ButtonSyle>{children}</ButtonSyle>
            }
            
        </>
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
    display: flex;
    align-items: center;
    justify-content: center;
`