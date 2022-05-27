import React, { useState, useEffect } from "react";
import Axios from "axios";

function Incrementer() {
  const [city, setCity] = useState(" ");
  const [weatherData, setWeatherData] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  });

  useEffect(() => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f2719b9da8433e4284c2819c1e75cc2`
    )
      .then((response) => {
        console.log(response.data);
        setWeatherData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
        });
      })
      .catch((err) => {
        console.log("error here");
      });
  }, [city]);
  console.log(weatherData);

  return (
    <div className="container">
      <div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button>Search</button>
        </div>
        <div>{weatherData.description}</div>
      </div>
    </div>
  );
}

export default Incrementer;
