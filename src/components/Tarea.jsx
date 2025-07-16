import { useDrag } from "react-dnd";
import { useTareas } from "../context/TareaContext";

export default function Tarea({tarea}) {
    const {borrarTarea} = useTareas()
    const nombre = tarea.nombre

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'TAREA',
        item: {type: 'TAREA', nombre},
        collect: (monitor) => ({
           isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <>
            <div
                ref={drag}
                className=" flex justify-between border p-4 bg-red-200 mb-4"
                style={{ opacity: isDragging ? 0.5 : 1 }}
            >
                {nombre} 
                {tarea.caja === "delete" ? <button onClick={() => borrarTarea(tarea)}>X</button>: null}
            </div>
        </>
    )
}