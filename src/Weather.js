import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
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
            <input type="submit" value="Search" className="btn btn-success" />
          </div>
        </div>
      </form>
      <h1>New York</h1>

      <li> Wednesday 07:00</li>
      <li>Mostly Cloudy</li>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />{" "}
          27°C
        </div>
        <div className="col-6">
          <ul>
            <li> Preciptation:1%</li>
            <li>Humidity:60%</li>
            <li>Wind:4 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
