import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import CadastroPage from "./pages/CadastroPage"

import UserContext from "./context/UserContext"
import { useState } from "react"
import HabitosPage from "./pages/HabitosPage"
import HojePage from "./pages/HojePage"
import HabitsContext from "./context/HabitsContext"
import HistoricoPage from "./pages/HistoricoPage"


export default function Router() {
    const [user, setUser] = useState({})
    const [qtdHabits, setQtdHabits] = useState(0)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <HabitsContext.Provider value={{qtdHabits, setQtdHabits}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/cadastro" element={<CadastroPage />} />
                        <Route path="/habitos" element={<HabitosPage />} />
                        <Route path="/hoje" element={<HojePage />} />
                        <Route path="/historico" element={<HistoricoPage />} />
                    </Routes>
                </BrowserRouter>
            </HabitsContext.Provider>
        </UserContext.Provider>
    )
}