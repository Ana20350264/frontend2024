const persona = {
 nombre: "Ana Lilia Cruz Roque",
 edad: 22,
 profesion: "Estudiante",
 pasatiempos: [
  "Leer",
  "Dormir",
  "Comer golosinas",
  "Pasear",
  "Tiktok"
 ],
 fecha_nacimiento: "18 de septiembre de 2001",
 signo: "Virgo♍"

}

function App() {

  return (
      <div>
        <h1>Informacion personal</h1>
        <hr />
        <ul>
          <li>Nombre: {persona.nombre}</li>
          <li>Edad: {persona.edad}</li>
          <li>Pofesion: {persona.profesion}</li>
          <li>Pasatiempos: 
            <ul>
            <li> {persona.pasatiempos[0]}</li>
            <li>{persona.pasatiempos[1]}</li>
            <li>{persona.pasatiempos[2]}</li>   
            <li>{persona.pasatiempos[3]}</li>         
            <li>{persona.pasatiempos[4]}</li>
            </ul>
          </li>
          <li>Fecha de nacimiento: {persona.fecha_nacimiento}</li>
          <li>Zigno Zodiacal: {persona.signo}</li>
        </ul>
      </div>
  )
}

export default App
