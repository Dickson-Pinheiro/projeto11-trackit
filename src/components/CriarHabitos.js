import styled from "styled-components"

export default function CriarHabito({showForm, setShowForm}) {

    function activeForm(){
        setShowForm(!showForm)
    }

    return (
        <ContainerCriarHabito>
            <p>Meus hábitos</p>
            <button onClick={activeForm}>+</button>
        </ContainerCriarHabito>
    )
}

const ContainerCriarHabito = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
    font-family: Lexend Deca;
    margin-top: 21px;
    margin-bottom: 21px;
    p {
        color: #126BA5;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
    }
    button {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        color: #ffffff;
        font-size: 27px;
        font-weight: 400;
        cursor: pointer;
    }
`