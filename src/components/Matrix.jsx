import { useState } from "react";
import Caja from "./Caja"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export default function Matrix() {
    const tareas = [
        {nombre: "tarea1", caja: "do"}, 
        {nombre: "tarea2", caja: "decide"}, 
        {nombre: "tarea3", caja: "delegate"},
        {nombre: "tarea4", caja: "delete"}
    ]
    const [listaTareas, setListaTareas] = useState(tareas)

    function filtarTareas(listaTareas, tipo) {
        return listaTareas.filter(tarea => tarea.caja === tipo) 
    }

    const tareasDo = filtarTareas(listaTareas, "do")
    const tareasDecide =  filtarTareas(listaTareas, "decide")
    const tareasDelegate = filtarTareas(listaTareas, "delegate")
    const tareasDelete = filtarTareas(listaTareas, "delete")

    const moverItem = (item, caja) =>{
        console.log(item, caja)
        const nuevaListaTareas = listaTareas.map(tarea =>{
            if(tarea.nombre === item){
                 return { ...tarea, caja }
            }
            return tarea
        })
        console.log(nuevaListaTareas)
        setListaTareas(nuevaListaTareas)
    }
    return (
        <>
          <DndProvider backend={HTML5Backend}>
            <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr_1fr] gap-4">
                <div></div>
                <p className="text-center">Urgent</p>
                <p className="text-center">Not urgent</p>
                <p className="rotate-50">Important</p>
                <Caja tareas={tareasDo} bgColor="bg-green-500" onDrop={moverItem} nombreCaja="do"></Caja>
                <Caja tareas={tareasDecide} bgColor="bg-sky-500/100" onDrop={moverItem} nombreCaja="decide"></Caja>
                <p>Not important</p>
                <Caja tareas={tareasDelegate} bgColor=" bg-red-500" onDrop={moverItem} nombreCaja="delegate"></Caja>
                <Caja tareas={tareasDelete} bgColor="bg-gray-500" onDrop={moverItem} nombreCaja="delete"></Caja>
            </div>
        </DndProvider>
        </>
    )
}