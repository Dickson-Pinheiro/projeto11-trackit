import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"

import check from "../assets/check.svg"
import UserContext from "../context/UserContext"

export default function HabitCheck({id, name, done, currentSequence, highestSequence, handlePage, setHandlePage}) {

    const { user } = useContext(UserContext)
    const {token} = user

    function checkOrUncheck(){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        let URL;
        if(!done){
             URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        } else {
            URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        }
        axios.post(URL, {}, config)
            .then(res => {
                console.log(res)
                setHandlePage(!handlePage)
            })
    }

    return (
        <ContainerHabitCheck checked={done} currentSequence={currentSequence} highestSequence={highestSequence}>
            <div onClick={checkOrUncheck}>
                <div>
                    <h1>{name}</h1>
                    <p>Sequência atual: <span>{currentSequence} dias</span></p>
                    <p>Seu recorde: <span>{highestSequence} dias</span></p>
                </div>
                <ContainerCheckImage checked={done}>
                    <img src={check}></img>
                </ContainerCheckImage>
            </div>
        </ContainerHabitCheck>
    )
}

const ContainerHabitCheck = styled.div`
    padding-left: 18px;
    padding-right: 18px;
    font-family: Lexend Deca;
    & > div {
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: space-between;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 340px;
        h1 {
            font-size: 20px;
            font-weight: 400;
            color: #666666;
            margin-bottom: 7px;
            line-height: 25px;
        }
        p {
            font-size: 13px;
            line-height: 16px;
            font-weight: 400;
            color: #666666;
            span {
                color: ${props => props.checked ? "#8FC549": "#666666"};
            }
        }
        p:last-child {
            span {
                color: ${props => (props.currentSequence === props.highestSequence && props.highestSequence !==0) ? "#8FC549" : "#666666"};
            }
        }
    }

`
const ContainerCheckImage = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${props => props.checked ? "#8FC549" : "#EBEBEB"};
    border: ${props => props.checked ? "none" : "1px solid #E7E7E7"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`
