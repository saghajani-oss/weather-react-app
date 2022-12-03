import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
return (
  <div className="WeatherInfo">
    <h1 className="text-capitalize">{props.data.city}</h1>
    <ul>
      <li>
        <FormattedDate date={props.data.date} />
      </li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-4">
      <div className="col-6 mb-4">
        <img src={props.data.icon} alt="clear" />
        <strong className="weather-degree">
          {Math.round(props.data.temperature)}
        </strong>
        <span className="weather-unit">°C</span>
      </div>
      <div className="col-6 mb-4">
        <ul className="mt-3">
          <li>Precipitation: 2%</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
    </div>
  </div>
);
}