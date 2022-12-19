import { Link } from "react-router-dom"
import styled from "styled-components"
import FormAppS from "../styles/FromAppS"
import Button from "../components/Button"
import HeaderLogin from "../components/HeaderLogin"
import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import UserContext from "../context/UserContext"



export default function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setUser } = useContext(UserContext)

    function loginApp(e){
        e.preventDefault()
        const body = {
            email,
            password

        }
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        .then(res => {
            const {email, id, image, name, token} = res.data
            const userData = {email, id, image, name, token}
            console.log(userData)
            setUser(userData)
            navigate("/habitos")
        })
        .catch(err => console.log(err))
    }

    return (
        <ContainerLogin>
            <HeaderLogin />
            <FormAppS onSubmit={loginApp}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="email"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="senha"/>
                <Button >Entrar</Button>
            </FormAppS>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    padding-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    background-color: #ffffff;
    a {
        color: #52B6FF;
        text-decoration: underline;
        font-family: Lexend Deca;
        font-size: 14px;
        font-weight: 400;
    }
`