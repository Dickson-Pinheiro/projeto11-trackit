import styled from "styled-components"
import dayjs from "dayjs"
import { useEffect, useState, useContext } from "react"
import HabitsContext from "../context/HabitsContext"

export default function AtualDate({totalHabits, totalChecked, habitos}){
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

    const [atualDay, setAtualDay] = useState("")
    const [atualDate, setAtualDate] = useState("")
    const {setQtdHabits, qtdHabits} = useContext(HabitsContext)


    useEffect(() => {
        setAtualDay(dayjs().day())
        setAtualDate(dayjs().format("DD/MM"))
        setQtdHabits(Math.floor((totalChecked/totalHabits)*100))
    }, [habitos])


    return(
        <ContainerAtualDate>
            <h1>{days[atualDay]}, {atualDate}</h1>
            {totalChecked !== 0?
            <p style={{color: "#8FC549"}}>{qtdHabits}% dos hábitos concluídos</p>:
            <p>Nenhum hábito concluído ainda</p>
            
        }
        </ContainerAtualDate>
    )
}

const ContainerAtualDate = styled.div`
    margin-top: 98px;
    margin-bottom: 28px;
    padding-left: 17px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-family: Lexend Deca;
    h1 {
        font-size: 23px;
        color: #126BA5;
        font-weight: 400;
        line-height: 29px;
    }
    p {
        font-size: 18px;
        font-weight: 400;
        color: #BABABA;
        line-height: 23px;
    }
`