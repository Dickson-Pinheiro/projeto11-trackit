import axios from "axios"
import styled from "styled-components"
import trash from "../assets/trash.svg"
import Days from "./Days"
import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Habito({days, name, id, reloadHabits, setReloadHabits}) {
    const {user} = useContext(UserContext)
    const {token} = user
    function deleteHabit(){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.delete(URL, config)
        .then(res => {
            console.log(res)
            setReloadHabits(!reloadHabits)
        })
    }

    return (
        <ContainerHabito>
            <HabitoS>
                <p>{name}</p>
                <img src={trash} alt="trash" onClick={deleteHabit}/>
                <Days days={days}/>
            </HabitoS>
        </ContainerHabito>
    )
}

const ContainerHabito = styled.div`
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
`

const HabitoS = styled.div`
    position: relative;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 5px;
    p {
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 8px;
    }
    img {
        position: absolute;
        top: 11px;
        right: 10px;
        cursor: pointer;
    }
`