import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function weatherDetails(response) {

    console.log(response);
    
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt*1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });

    setReady(true);
   
  }

   if (ready) {
     return (
       <div className="weather">
         <div className="container">
           <form>
             <div className="row">
               <div className="col-9">
                 <input
                   type="search"
                   placeholder="Enter a city ..."
                   autoFocus="on"
                   className="search-text w-100"
                 />
               </div>
               <div className="col-3">
                 <input
                   type="submit"
                   value="Search"
                   className="search-button w-100"
                 />
               </div>
             </div>
           </form>
           <h1 className="text-capitalize">{props.defauldCity}</h1>
           <ul>
             <li>
               <FormattedDate date={weatherData.date}/>
             </li>
             <li className="text-capitalize">{weatherData.description}</li>
           </ul>
           <div className="row mt-4">
             <div className="col-6 mb-4">
               <img src={weatherData.icon} alt="clear" />
               <strong className="weather-degree">
                 {Math.round(weatherData.temperature)}
               </strong>
               <span className="weather-unit">°C</span>
             </div>
             <div className="col-6 mb-4">
               <ul className="mt-3">
                 <li>Precipitation: 2%</li>
                 <li>Humidity: {weatherData.humidity}%</li>
                 <li>Wind: {Math.round(weatherData.wind)} km/h</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     );
   }
    else {
      
  let apiKey = "3bad7bd4137a5ff9f5c84125992a313a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defauldCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherDetails);

  return "Loading ..."

    }
}
