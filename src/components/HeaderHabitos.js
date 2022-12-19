import { useContext } from "react"
import UserContext from "../context/UserContext"
import styled from "styled-components"

export default function HeaderHabitos(){

    const { user } = useContext(UserContext)
    const { image } = user

    return(
        <HeaderHabitosContainer>
            <p>TrackIt</p>
            <img  src={image} alt="imagem do usuário"/>
        </HeaderHabitosContainer>
    )
}

const HeaderHabitosContainer = styled.header`
    display: flex;
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    p {
        font-family: Playball;
        font-size: 39px;
        font-weight: 400;
        color: #FFFFFF;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;       
    }
`