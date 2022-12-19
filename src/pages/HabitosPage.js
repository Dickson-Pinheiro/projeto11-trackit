import { useState } from "react";
import CriarHabito from "../components/CriarHabitos";
import FormHabitos from "../components/FormHabito";
import Habitos from "../components/Habitos";
import HeaderHabitos from "../components/HeaderHabitos";


export default function HabitosPage() {

    const [showForm, setShowForm] = useState(false)
    const [reloadHabits, setReloadHabits] = useState(true)

    return (
        <>
            <HeaderHabitos />
            <CriarHabito showForm={showForm} setShowForm={setShowForm} />
            {showForm && <FormHabitos setShowForm={setShowForm} reloadHabits={reloadHabits} setReloadHabits={setReloadHabits}/>}
            <Habitos reloadHabits={reloadHabits} setReloadHabits={setReloadHabits}/>
        </>
    )
}