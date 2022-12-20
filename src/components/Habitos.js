import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Habito from "./Habito"
import UserContext from "../context/UserContext"

export default function Habitos({reloadHabits, setReloadHabits}) {

    const [habitos, setHabitos] = useState([])

    const { user } = useContext(UserContext)
    const { token } = user

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(URL, config)
            .then(res => {
                setHabitos(res.data)
            })
    }, [reloadHabits])

    return (
        <ContainerHabitos>
            {
                habitos.length ?
                    (habitos.map(habito => <Habito key={habito.id} id={habito.id} days={habito.days} name={habito.name} reloadHabits={reloadHabits} setReloadHabits={setReloadHabits} />)) :
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> 
            
            }
        </ContainerHabitos>
    )
}

const ContainerHabitos = styled.div`
    margin-top: 20px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    & > p {
        font-size: 18px;
        font-family: Lexend Deca;
        font-weight: 400;
        line-height: 23px;
        color: #666666;
        padding: 19px;
    }
`
