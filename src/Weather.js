import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
 
  let [weatherData, setWeatherData] = useState({ready: false});
  let [city, setCity] = useState(props.defauldCity);

  function weatherDetails(response) {

    console.log(response);
    
    setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt*1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      city: response.data.name
    });
  }


  function searchCity() {
  let apiKey = "3bad7bd4137a5ff9f5c84125992a313a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherDetails);
  }


  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }


  function handleCityName(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

   if (weatherData.ready) {
     return (
       <div className="weather">
         <div className="container">
           <form onSubmit={handleSubmit}>
             <div className="row">
               <div className="col-9">
                 <input
                   type="search"
                   placeholder="Enter a city ..."
                   autoFocus="on"
                   className="search-text w-100"
                   onChange={handleCityName}
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
           <WeatherInfo data={weatherData} />
         </div>
       </div>
     );
   } else {
     searchCity();

     return "Loading ...";
   }
}
