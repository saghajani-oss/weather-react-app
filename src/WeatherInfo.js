import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


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
        <img src={props.data.icon} alt={props.data.description} />
        <WeatherTemperature celcious={props.data.temperature} />
        
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