import { useState } from "react";
import SearchForm from "../searchForm/SearchForm";
import "./header.css"


const Header = () => {

  const [currentCity, setCurrentCity] = useState('hanoi');
  const [currentCountry, setCurrentCountry] = useState('')
  const [temperature, setTemperature] = useState("");
  const [visibility, setVisibility] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");
  const [time, setTime] = useState("");
  const [shortDesc, setShortDesc] = useState('');

  const getWeather = async () => {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=364613a525c0322a99664f4f7cf8cbad`
    const data = await fetch(weatherApi)
    .then(res => res.json())
    setCurrentCountry(data.sys.country)
    setTemperature(Math.floor(data.main.temp - 273.15))
    setVisibility(data.visibility)
    setWindSpeed(data.wind.speed)
    setHumidity(data.main.humidity)
    setTime(new Date().toLocaleString(`${data.sys.country}`))
    setShortDesc(data.weather[0].main)
  }

  getWeather();

  return (
    <div className="container">
      <SearchForm setCurrentCity={setCurrentCity}/>
      <div className="display-weather-info">
        <div className="city">
          <h1>
            <span>{currentCity},</span>
            <span> {currentCountry}</span>
          </h1>
        </div>
        <div className="time">
          <p>{time}</p>
        </div>
        <div className="temperature">
          <h1>{temperature} <sup>o</sup>C</h1>
        </div>
        <div className="short-desc">
          <h1>{shortDesc}</h1>
        </div>
        <div className="information">
          <div className="information-detail visibility">
            <i className="fa-solid fa-eye"></i>
            <p>{visibility}m</p>
          </div>
          <div className="information-detail wind">
            <i className="fa-solid fa-wind"></i>
            <p>{windSpeed}(m/s)</p>
          </div>
          <div className="information-detail humidity">
            <i className="fa-solid fa-cloud-sun"></i>
            <p>{humidity}(%)</p>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Header;