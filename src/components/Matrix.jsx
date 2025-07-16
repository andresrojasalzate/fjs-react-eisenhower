import { useState } from "react";
import Caja from "./Caja"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TareaContext } from "../context/TareaContext";

export default function Matrix() {
    const tareas = localStorage.getItem("tareas")
    const [listaTareas, setListaTareas] = useState(tareas ? JSON.parse(tareas) : [])

    function filtarTareas(listaTareas, tipo) {
        return listaTareas.filter(tarea => tarea.caja === tipo)
    }

    const tareasDo = filtarTareas(listaTareas, "do")
    const tareasDecide = filtarTareas(listaTareas, "decide")
    const tareasDelegate = filtarTareas(listaTareas, "delegate")
    const tareasDelete = filtarTareas(listaTareas, "delete")

    const moverItem = (item, caja) => {
        const nuevaListaTareas = listaTareas.map(tarea => {
            if (tarea.nombre === item) {
                return { ...tarea, caja }
            }
            return tarea
        })
        setListaTareas(nuevaListaTareas)
    }

    const guardarTareas = () => {
        localStorage.setItem("tareas", JSON.stringify(listaTareas))
    }

    const borrarTarea = (tareaBorrada) => {
        const nuevaListaTareas = listaTareas.filter(tarea => tarea !== tareaBorrada)
        setListaTareas(nuevaListaTareas)
    }

    const valueTareaContext = {
        moverItem,
        borrarTarea
    }
    return (
        <>
            <TareaContext.Provider value={valueTareaContext}>
                <DndProvider backend={HTML5Backend}>
                    <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr_1fr] gap-4">
                        <div></div>
                        <p className="text-center">Urgent</p>
                        <p className="text-center">Not urgent</p>
                        <p className="rotate-50">Important</p>
                        <Caja tareas={tareasDo} bgColor="bg-green-500"  nombreCaja="do"></Caja>
                        <Caja tareas={tareasDecide} bgColor="bg-sky-500/100"  nombreCaja="decide"></Caja>
                        <p>Not important</p>
                        <Caja tareas={tareasDelegate} bgColor=" bg-red-500"  nombreCaja="delegate"></Caja>
                        <Caja tareas={tareasDelete} bgColor="bg-gray-500"  nombreCaja="delete"></Caja>
                    </div>
                    <button onClick={() => guardarTareas()}>Guardar</button>
                </DndProvider>
            </TareaContext.Provider>

        </>
    )
}