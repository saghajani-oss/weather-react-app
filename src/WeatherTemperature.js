import React, {useState} from "react";

export default function WeatherTemperature(props) {
    let [unit, setUnit] = useState("celcious");


    function setCelcious(event){
        event.preventDefault();
        setUnit("celcious");
    }

    function setFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }


     function fahrenheitTemp() {
       return (props.celcious * 9) / 5 + 32;
     }


    if (unit === "celcious") {
      return (
        <span className="WeatherTemperature">
          <strong className="weather-degree">
            {Math.round(props.celcious)}
          </strong>
          <span className="weather-unit">
            °C |{" "}
            <a href="/" onClick={setFahrenheit}>
              °F
            </a>
          </span>
        </span>
      );
    }
    else {
      return (
        <span className="WeatherTemperature">
        <strong className="weather-degree">{Math.round(fahrenheitTemp())}</strong>
        <span className="weather-unit">
          <a href="/" onClick={setCelcious}>°C</a> | °F
        </span>
      </span> 
      );
    }
   
}