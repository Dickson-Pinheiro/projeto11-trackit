import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import CadastroPage from "./pages/CadastroPage"

import UserContext from "./context/UserContext"
import { useState } from "react"


export default function Router() {
    const [user, setUser] = useState({})
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<CadastroPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}