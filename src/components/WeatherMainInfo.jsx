import React from "react";
import styles from "./WeatherMainInfo.module.css";

const WeatherMainInfo = ({ weather }) => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location?.name}</div>
      <div className={styles.country}>{weather?.location?.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current?.condition?.icon}`}
            alt={weather?.current?.condition?.text}
            width="128"
          />
        </div>
        <div className={styles.weatherCondition}>
          <div className={styles.condition}>
            {weather?.current?.condition?.text}
          </div>
          <div className={styles.current}>{weather?.current?.temp_c}°</div>
        </div>
      </div>
      {/* 6 . 3 0 2 2 0 3 0 5 2 2 6 4 3 3 6, -75.57611395901007 */}
      {/* src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d65239.16390351211!2d-75.6047783030267!3d6.283940564479232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1671345379587!5m2!1ses!2sco`} */}
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7233532755!2d-0.3824705355571943!3d51.52873356010134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses-419!2sco!4v1671346725713!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="100%"
        height="350"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default WeatherMainInfo;
