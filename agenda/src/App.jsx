import ListItem from "./ListItem"

const personas = [
  {
    nombre:'Ana Lilia',
    apellido:'Cruz',
    email:'ISC20350264@gmail.com',
    telefono:'287 146 9041',
  },
  {
    nombre:'Guadalupe',
    apellido:'Roque',
    email:'guadaluperoque@gmail.com',
    telefono:'287 883 1244',
  },
  {
    nombre:'Jose Israel',
    apellido:'Cruz',
    email:'joetri@gmail.com',
    telefono:'287 139 5120',
  },
]

function App() {

  return (
    <div>
      <h1> Agenda </h1>
      <hr/>
      <ul>
        {personas.map((persona)=>(
          <ListItem
          key={persona.email}
          persona={persona}

          />
        ))}
      </ul>
      </div>
  )
}

export default App