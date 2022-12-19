import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../context/UserContext"
import Days from "./Days"

export default function FormHabitos({setShowForm, reloadHabits, setReloadHabits}){
    const {user} = useContext(UserContext)
    const {token} = user
    const [selectedDays, setSelectedDays] = useState([])
    const [name, setName] = useState("")

    function createNewHabit(e){
        e.preventDefault()
        if(selectedDays.length === 0){
            alert("Selecione ao menos um dia")
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const body = {
            name,
            days: selectedDays
        }

        axios.post(URL, body, config)
        .then(res => {
            console.log(res)
            setShowForm(false)
            setReloadHabits(!reloadHabits)
        })
    }

    return(
        <ContainerFormHabitos >
            <form onSubmit={createNewHabit}>
                <input type="text" placeholder="nome do hábito" value={name} onChange={e => setName(e.target.value)} required/>
                <Days selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>
                <ContainerButton>
                    <button onClick={() => setShowForm(false)}>Cancelar</button>
                    <button type="submit">Salvar</button>
                </ContainerButton>
            </form>
        </ContainerFormHabitos>

    )
}

const ContainerFormHabitos = styled.div`
    width: 100%;
    padding-left: 17px;
    padding-right: 17px;
    form {
        padding: 18px;
        background-color: #ffffff;
        border-radius: 5px;
        input {
            width: 303px;
            height: 45px;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            &::placeholder {
                padding-left: 11px;
                font-size: 20px;
                color: #DBDBDB;
                line-height: 25px;
                font-weight: 400;
            }
        }
    }
`

const ContainerButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 32px;
    gap: 4px;
    button:first-child {
        background-color: #ffffff;
        border: none;
        color: #52B6FF;
        font-size: 16px;
        width: 84px;
        height: 35px;
        font-family: Lexend Deca;
        font-weight: 400;
        line-height: 20px;
    }
    button:last-child {
        background-color: #52B6FF;
        width: 84px;
        height: 35px;
        border: none;
        border-radius: 5px;
        color: #ffffff;
        font-family: Lexend Deca;
        font-weight: 400;
        line-height: 20px;
    }
`