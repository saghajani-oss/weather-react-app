import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [weatherDate, setWeatherDate] = useState({});

  function weatherDetails(response) {
    
    console.log(response);
    
    setWeatherDate({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: "Wednesday 07:00",
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
             <li>{weatherDate.date}</li>
             <li className="text-capitalize">{weatherDate.description}</li>
           </ul>
           <div className="row mt-4">
             <div className="col-6 mb-4">
               <img src={weatherDate.icon} alt="clear" />
               <strong className="weather-degree">
                 {Math.round(weatherDate.temperature)}
               </strong>
               <span className="weather-unit">°C</span>
             </div>
             <div className="col-6 mb-4">
               <ul className="mt-3">
                 <li>Precipitation: 2%</li>
                 <li>Humidity: {weatherDate.humidity}%</li>
                 <li>Wind: {Math.round(weatherDate.wind)} km/h</li>
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
