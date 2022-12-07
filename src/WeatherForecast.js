import React, {useState} from "react";
import WeatherForecastDaily from "./WeatherForecastDaily";
import axios from "axios";
import "./WeatherForecast.css";



export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse (response) {
        setForecast(response.data.daily);

        setLoaded(true);
    }
    

   if (loaded) {
     return (
       <div className="WeatherForecast">
         <div className="row">
           <div className="col">
           <WeatherForecastDaily data={forecast[0]} />
           </div>
         </div>
       </div>
     );
   }
   else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "e947cb2640f1db92e6a19005bc43b435";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   }
}