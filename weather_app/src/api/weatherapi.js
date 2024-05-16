const getWeather = async(city="tuxtepec") => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    const url= `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    const response = await fetch(url)
    const weather = await response.json()
    
    //console.log(weather)
    return weather
   }

export default getWeather