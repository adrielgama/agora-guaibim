import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";

import api from "../../services/apiWeather";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  realfeel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  temp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    boxShadow: 3,
  },
}));

const Weather = () => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState();
  const [temperature, setTemperature] = useState();
  const [realFeel, setRealFeel] = useState();
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function loadWeather() {
      api
        .get(`?q=Salvador,br&lang=pt_br&appid=${API_KEY}`)
        .then((response) => {
          setData(response.data);
          setTemperature(response.data.main.temp);
          setRealFeel(response.data.main.feels_like);
          setWeather(response.data.weather);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    loadWeather();

    setInterval(() => {
      loadWeather();
    }, 60000);
  }, []);

  var icon = weather.map((obj, i) => {
    return (
      <div key={i}>
        <img
          src={`http://openweathermap.org/img/wn/${obj.icon}@2x.png`}
          alt="icon"
        />
      </div>
    );
  });

  return (
    <div className={classes.root}>
      <div className={classes.temp}>
        <h2>{parseFloat(temperature / 10).toFixed(1)}º C</h2>
        <div>{icon}</div>
      </div>
      <div className={classes.realfeel}>
        <h3>Sensação térmica</h3>
        <h2>{parseFloat(realFeel / 10).toFixed(1)}º C</h2>
      </div>
    </div>
  );
};

export default Weather;
