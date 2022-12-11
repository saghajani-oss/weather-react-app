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
         {forecast.map(function(dailyForecast, index) {
          if (index < 5) {
            return (
              <div key={index} className="col Forecast-Day">
                <WeatherForecastDaily data={dailyForecast} />
              </div>
            );
          }
          return null;
         })}
                
         </div>
       </div>
     );
   }
   else {
     let apiKey = "73a00877081bd43422bdee0f3022beb5";
     let latitude = props.coordinates.lat;
     let longitude = props.coordinates.lon;
     let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   }
}