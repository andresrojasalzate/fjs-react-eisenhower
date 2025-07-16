import {createContext, useContext} from "react"

export const TareaContext = createContext()
export const useTareas = () => useContext(TareaContext)