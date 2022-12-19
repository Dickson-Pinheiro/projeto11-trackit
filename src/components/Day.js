import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Day({days, id, day, selectedDays, setSelectedDays}){
    const [active, setActive] = useState(false)

    useEffect((
        () => {
            if(!days){
                return
            }
            if(days.includes(id)){
                setActive(true)
            }
        }
    ), [])

    function selectDay(){
        if(days){
            return
        }
        let newSelectedDays;
        if(selectedDays.includes(id)){
            newSelectedDays = selectedDays.filter(idSelected => idSelected !== id)
        } else {
            newSelectedDays = [...selectedDays, id]
        }
        setSelectedDays(newSelectedDays)
        console.log(selectedDays)
        setActive(!active)
    }

    return(
        <DayS active={active} onClick={selectDay}>{day}</DayS>
    )
}

const DayS = styled.li`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    color: ${props => props.active ? "#FFFFFF": "#BDBDBD"};
    background-color: ${props => props.active ? "#CFCFCF": "#FFFFFF"};
    cursor: pointer;
`