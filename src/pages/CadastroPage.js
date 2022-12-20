import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Button from "../components/Button"
import HeaderLogin from "../components/HeaderLogin"
import FormAppS from "../styles/FromAppS"

export default function CadastroPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [loadding, setLoadding] = useState(false)

    function createUser(e) {
        e.preventDefault()
        setLoadding(true)
        const body = {
            email,
            password,
            name,
            image
        }
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                window.alert(err.response.data.message)
                setLoadding(false)
                setEmail("")
                setPassword("")
                setName("")
                setImage("")
            })
    }

    return (
        <ContainerCadastroPage>
            <HeaderLogin />
            <FormAppS onSubmit={createUser}>
                {
                    loadding ?
                        <>
                            <input type="email" value={email} disabled onChange={e => setEmail(e.target.value)} placeholder="email" required />
                            <input type="senha" value={password} disabled onChange={e => setPassword(e.target.value)} placeholder="senha" required />
                            <input type="text" value={name} disabled onChange={e => setName(e.target.value)} placeholder="nome" required />
                            <input type="text" value={image} disabled onChange={e => setImage(e.target.value)} placeholder="foto" required />
                        </>
                        :
                        <>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required />
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required />
                            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="nome" required />
                            <input type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="foto" required />
                        </>
                }

                <Button loadding={loadding}>Cadastrar</Button>
            </FormAppS>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </ContainerCadastroPage>
    )
}

const ContainerCadastroPage = styled.div`
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