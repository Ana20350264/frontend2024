import List from "./List"
//arreglo donde cada entrada del objeto va a almacenar una tarea
const taskList = [
  {
    id: 1,
    task: 'Estudiar',
    limit: '13:00',
  },
  {
    id: 2,
    task: 'Practicas',
    limit: '15:00',
  },
  {
    id: 3,
    task: 'Jugar',
    limit: '19:00',
  },
]
function App() {

  return (

      <div>
      <h1>To Do List</h1>
      <hr/>

      <List taskList = {taskList}/>

      </div>

  )
}

export default App
