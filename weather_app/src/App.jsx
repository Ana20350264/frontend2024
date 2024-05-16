import { useEffect, useState } from "react"
import getWeather from "./api/weatherapi"
import WeatherCard from "./components/WeatherCard"
import Search from "./components/Search.jsx"
import './assets/css/index.css'
import { useForm} from "./Hooks/useForm"

function App() {
  
  const[weather, setWeather] = useState(null)
  const[cities, setCities] = useState()

  useEffect(()=>{
    const apiWeather = async () => {
    setWeather(await getWeather(cities))}

    apiWeather()
  },[cities])
  
  const [values,handleInputChange, reset] = useForm ({searchCities:""})

  
  return (
    <>
    <div className="container">
      <h1>weather app</h1>
      <hr />
      <div className="row">
      <Search
        values={values}
        handleInputChange={handleInputChange}
        reset={reset}
        city={cities}
        setCity={setCities}
        />
      </div>
      <div className="row">
        <div className="col text-center"> 
        {
          weather ?
          <WeatherCard weather={weather}/>:
          <h2>loading...</h2>
        }   
    </div>
    </div>
    </div>
    </>
  )
}

export default App