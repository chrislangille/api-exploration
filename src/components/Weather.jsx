import React, { useEffect, useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Halifax");

  // Calling the API
  const weather_api = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchData = async () => {
    await fetch(`http://api.weatherapi.com/v1/current.json?key=${weather_api}&q=${city}&aqi=no`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };

  // Initial load
  useEffect(() => {
    fetchData();
  }, []);

  // Handle the input change of the form
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // Handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="weather-box">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city name" value={city} onChange={handleInputChange} />
        <button type="submit">Load Weather</button>
      </form>

      {data ? (
        <div>
          <h2>{data.location.name}</h2>
          <div>
            <p>{data.current.condition.text}</p>
            <img src={data.current.condition.icon}></img>
          </div>
          <p>{data.location.localtime}</p>
          <p>Temperature: {data.current.temp_c} °C</p>
          <p>Feels like: {data.current.feelslike_c} °C</p>
          <p>Humidity: {data.current.humidity} %</p>
          <p>Wind Speed: {data.current.wind_kph} kph</p>
        </div>
      ) : (
        <div>
          <p>Loading weather data...</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
