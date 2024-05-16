import List from "./List"
import TaskModal from "./TaskModal"

//arreglo donde cada entrada del objeto va a almacenar una tarea
const taskList = [
  {
    id: 1,
    task: 'Estudiar',
    location: "Casa",
    limit: '13:00',
    description: "Estudiar para el proximo examen",
    done: false
  },
  {
    id: 2,
    task: 'Practicas',
    location: "Campo",
    limit: '15:00',
    description: "Entrenar para el siguiente partido",
    done: false
  },
  {
    id: 3,
    task: 'Jugar',
    location: "Casa",
    limit: '19:00',
    description: "Jugar videojuegos",
    done: false
  },
]
function App() {

  return (

      <div className="container">
      <h1>To Do List</h1>
      <hr/>

      <List taskList = {taskList}/>
      <hr />
      <div className="text-end">
        <TaskModal taskList={taskList} />
        <button 
        className="btn btn-outline-primary"
        data-bs-target="#taskModal"
        data-bs-toggle="modal"
        >

          <i className="bi bi-plus-lg"></i>
          Add
        </button>
      </div>
      </div>

  )
}

export default App
