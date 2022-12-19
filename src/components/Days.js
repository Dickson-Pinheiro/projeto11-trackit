import styled from "styled-components";
import Day from "./Day";

const weekdays = [{day: "S", id: 1}, {day: "T", id: 2}, {day: "Q", id: 3}, {day: "Q", id: 4}, {day: "S", id: 5}, {day: "S", id: 6}, {day: "D", id: 7}]

export default function Days({days, selectedDays, setSelectedDays}){
    return(
        <ContainerDays>
            {weekdays.map(day => <Day id={day.id} key={day.id} day={day.day} days={days} selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>)}
        </ContainerDays>
    )
}

const ContainerDays = styled.ul`
    display: flex;
    gap: 4px;
    margin-top: 8px;
`

