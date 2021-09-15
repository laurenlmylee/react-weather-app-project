import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";


export default function Weather(props) {

const [weatherData, setWeatherData]=useState({ready:false});

function handleResponse(response){
  console.log(response.data);
  setWeatherData({
    ready:true,
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    description: response.data.weather[0].description,
    iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    wind: Math.round(response.data.wind.speed),
    city:response.data.name,
    date:new Date(response.data.dt * 1000),
  });
  
}

if (weatherData.ready)
{  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-success w-100" autoFocus="on" />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>

      <FormattedDate date={weatherData.date} />
      <li className="text-capitalize">{weatherData.description}</li>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />{" "}
            <div className="float-left">
              <span className="temperature"> {Math.round(weatherData.temperature)} </span><span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );

} else {
  const apiKey="c9b52ad5a848357992faab561bbd3f83";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return("Loading...");
}
}
