import { useDrop } from 'react-dnd';
import Tarea from './Tarea';

export default function Caja({tareas, bgColor, nombreCaja, onDrop}) {
    const [, drop] = useDrop({
        accept: 'TAREA',
        drop: (item) =>{
            onDrop(item.nombre, nombreCaja)
        },
        collect: monitor => ({
        isOver: !!monitor.isOver(),
      })
    })

    return(
        <>
            <div ref={drop} className={`min-w-[220px] min-h-[220px] rounded-xl ${bgColor}`}>
                {tareas.map(tarea =>(
                    <Tarea key={tarea.nombre} tarea={tarea}></Tarea>
                ))}
            </div>
        </>
    )
}