import { useDrag } from "react-dnd";

export default function Tarea({tarea}) {
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
                className="border p-4 bg-red-200 mb-4"
                style={{ opacity: isDragging ? 0.5 : 1 }}
            >
                {nombre} 
                {tarea.caja === "delete" ? <button>X</button>: null}
            </div>
        </>
    )
}