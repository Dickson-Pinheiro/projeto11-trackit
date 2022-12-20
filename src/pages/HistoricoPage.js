import styled from "styled-components";
import HeaderHabitos from "../components/HeaderHabitos";
import NavFooter from "../components/NavFooter";

export default function HistoricoPage(){
    return(
        <>
        <HeaderHabitos />
        <ContainerHistorico>
            <h1></h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </ContainerHistorico>
        <NavFooter />
        </>
    )
}

const ContainerHistorico = styled.div`
    margin-top: 91px;
    display: flex;
    flex-direction: column;
    gap: 17px;
    h1 {
        color: #126BA5;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
    }
    p {
        font-size: 18px;
        font-family: Lexend Deca;
        font-weight: 400;
        line-height: 23px;
        color: #666666;
        padding: 19px;
    }
`