import AtualDate from "../components/AtualDate";
import HabitCheck from "../components/HabitCheck";
import HeaderHabitos from "../components/HeaderHabitos";
import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";
import NavFooter from "../components/NavFooter";

export default function HojePage() {

    const { user } = useContext(UserContext)
    const { token } = user

    const [habitos, setHabitos] = useState([])
    const [handlePage, setHandlePage] = useState(false)

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(URL, config)
            .then(res => {
                setHabitos(res.data)
            })
    }, [handlePage])

    return (
        <>
            <HeaderHabitos />
            <AtualDate habitos={habitos} totalHabits={habitos.length} totalChecked = {habitos.filter(h => h.done === true).length}/>
            <ContainerHabitsCheck>
                { habitos.length !== 0 ? habitos.map(h => <HabitCheck currentSequence={h.currentSequence} done={h.done} highestSequence={h.highestSequence} id={h.id} name={h.name} key={h.id} handlePage={handlePage} setHandlePage={setHandlePage}/>) :
                <p>Sem hábitos para hoje!</p>
                }
            </ContainerHabitsCheck>
            <NavFooter />
        </>
    )
}

const ContainerHabitsCheck = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 80px;
    & > p {
        font-size: 18px;
        font-family: Lexend Deca;
        font-weight: 400;
        line-height: 23px;
        color: #666666;
        padding: 19px;
    }
`