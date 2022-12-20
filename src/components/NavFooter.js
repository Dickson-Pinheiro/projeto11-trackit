import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import HabitsContext from "../context/HabitsContext";


export default function NavFooter() {

    const {qtdHabits} = useContext(HabitsContext)

    return (
        <ContainerNavFooter>
            <Link to="/habitos">Habitos</Link>
            <Link to="/hoje">
                <div>
                <CircularProgressbar
                    value={qtdHabits}
                    text="hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        with: 2
                    })}
                />
                </div>
            </Link>
            <Link to="/historico">Historico</Link>
        </ContainerNavFooter>
    )
}

const ContainerNavFooter = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    font-family: Lexend Deca;
    a {
        text-decoration: none;
        color: #52B6FF;
        font-size: 23px;
    }

    a > div {
        width: 91px;
        margin-top: -30px;
        font-size: 18px;
        font-weight: 400;
        line-height: 23px;
    }

`