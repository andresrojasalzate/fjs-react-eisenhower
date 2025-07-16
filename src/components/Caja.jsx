import { useDrop } from 'react-dnd';
import Tarea from './Tarea';
import { useTareas } from '../context/TareaContext';

export default function Caja({tareas, bgColor, nombreCaja, onDrop}) {
    const {moverItem} = useTareas()

    const [, drop] = useDrop({
        accept: 'TAREA',
        drop: (item) =>{
            moverItem(item.nombre, nombreCaja)
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