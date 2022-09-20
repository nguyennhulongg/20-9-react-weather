import { useState } from "react";
import SearchForm from "./SearchForm";
import "./header.css"


const Header = () => {

  const [currentCity, setCurrentCity] = useState('hanoi');
  const [currentCountry, setCurrentCountry] = useState('')
  const [temperature, setTemperature] = useState("");
  const [visibility, setVisibility] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");

  const getWeather = async () => {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=364613a525c0322a99664f4f7cf8cbad`
    const data = await fetch(weatherApi)
    .then(res => res.json())
    setCurrentCountry(data.sys.country)
    setTemperature(Math.floor(data.main.temp - 273.15))
    setVisibility(data.visibility)
    setWindSpeed(data.wind.speed)
    setHumidity(data.main.humidity)
    console.log(data);
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
        <div className="temperature">
          <h1>{temperature} <sup>o</sup>C</h1>
        </div>
        <div className="short-desc">
          <div className="visibility">
            <i className="short-desc-detail fa-solid fa-eye"></i>
            <p>{visibility}</p>
          </div>
          <div className="wind">
            <i className="short-desc-detail fa-solid fa-wind"></i>
            <p>{windSpeed}</p>
          </div>
          <div className="humidity">
            <i className="short-desc-detail fa-solid fa-droplet-degree"></i>
            <p>{humidity}</p>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Header;