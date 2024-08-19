import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({  //to set the initial value
        city: "Mumbai",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    };
    
    return (
        <div>
            <h2>Search For the Weather</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}