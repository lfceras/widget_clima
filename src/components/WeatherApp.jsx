import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import axios from "axios";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from './WeatherApp.module.css'
import Loading from "./Loading";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  // console.log(weather.location.name);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `weather|${weather?.location?.name ?? ""}`;
  }, [weather]);

  const loadInfo = async (city = "medellin") => {
    try {
      const request = await axios(
        `${import.meta.env.VITE_URL}&key=${
          import.meta.env.VITE_API_KEY
        }&q=${city}`
      );
      // console.log(request.data.location)
      const date = request?.data;
      // console.log(date);
      setTimeout(() => {
        setWeather({ ...date });
      }, 2000);
      // setWeather(date);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading/>}
      
    </div>
  );
};

export default WeatherApp;
