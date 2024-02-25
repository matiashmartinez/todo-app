import { useState } from "react"
import { Todos } from "./components/Todos"


const mockTodos = [
  {
    id: '1',
    title: 'Terminar el proyecto Todos',
    completed: false
  }, {
    id: '2',
    title: 'Mejorar react con typescript',
    completed: false
  },
  {
    id: '3',
    title: 'Dejar funcionando la app correctamente ',
    completed: true
  }
]



export const App = (): JSX.Element => {

  const [todos, setTodos] = useState(mockTodos)

  return (
    <div className="todoapp">
      <Todos todos={todos}/>
    </div>
   
  )
}


