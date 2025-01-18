import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 8.8,
    humidity: 61,
    temp: 10.14,
    tempMax: 13.16,
    tempMin: 10.14,
    weather: "scattered clouds",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
