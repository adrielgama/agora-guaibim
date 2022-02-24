/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";

import img1 from "./svg/1.svg";
import img2 from "./svg/2.svg";
import img3 from "./svg/3.svg";
import img4 from "./svg/4.svg";
import img5 from "./svg/5.svg";
import img6 from "./svg/6.svg";
import img7 from "./svg/7.svg";
import img8 from "./svg/8.svg";
import img11 from "./svg/11.svg";
import img12 from "./svg/12.svg";
import img13 from "./svg/13.svg";
import img14 from "./svg/14.svg";
import img15 from "./svg/15.svg";
import img16 from "./svg/16.svg";
import img17 from "./svg/17.svg";
import img18 from "./svg/18.svg";
import img20 from "./svg/20.svg";
import img21 from "./svg/21.svg";
import img22 from "./svg/22.svg";
import img23 from "./svg/23.svg";
import img24 from "./svg/24.svg";
import img25 from "./svg/25.svg";
import img26 from "./svg/26.svg";
import img29 from "./svg/29.svg";
import img30 from "./svg/30.svg";
import img31 from "./svg/31.svg";
import img32 from "./svg/32.svg";
import img33 from "./svg/33.svg";
import img34 from "./svg/34.svg";
import img35 from "./svg/35.svg";
import img38 from "./svg/38.svg";
import img39 from "./svg/39.svg";
import img41 from "./svg/41.svg";
import img42 from "./svg/42.svg";
import img44 from "./svg/44.svg";
import imgNA from "./svg/na.svg";

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
    flexDirection: "column",
  },
  iconTemp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    boxShadow: 3,
  },
  iconWeather: {
    width: 60,
    height: 60,
  },
}));

const Weather = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [temperature, setTemperature] = useState();
  const [realFeel, setRealFeel] = useState();
  const [weather, setWeather] = useState([]);
  const [text, setText] = useState("");

  const [loading, setLoading] = useState(true);

  async function loadWeather() {
    await api
      .get(`?apikey=${API_KEY}&language=pt-br&details=true`)
      .then((response) => {
        setData(response.data[0]);
        setTemperature(data.Temperature.Metric.Value);
        setRealFeel(data.RealFeelTemperature.Metric.Value);
        setWeather(data.WeatherIcon);
        setText(data.WeatherText);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }

  useEffect(() => {
    loadWeather();
    setInterval(() => {
      window.setTimeout(function () {
        window.location.reload();
      }, 600000);
    }, 600000);

  }, [loading]);

  return (
    <div className={classes.root}>
      <div className={classes.temp}>
        <div className={classes.iconTemp}>
          <h2>{temperature}º C</h2>
          <div>
            {weather === 1 ? (
              <img src={img1} alt="Icon" className={classes.iconWeather} />
            ) : weather === 2 ? (
              <img src={img2} alt="Icon" className={classes.iconWeather} />
            ) : weather === 3 ? (
              <img src={img3} alt="Icon" className={classes.iconWeather} />
            ) : weather === 4 ? (
              <img src={img4} alt="Icon" className={classes.iconWeather} />
            ) : weather === 4 ? (
              <img src={img4} alt="Icon" className={classes.iconWeather} />
            ) : weather === 5 ? (
              <img src={img5} alt="Icon" className={classes.iconWeather} />
            ) : weather === 6 ? (
              <img src={img6} alt="Icon" className={classes.iconWeather} />
            ) : weather === 7 ? (
              <img src={img7} alt="Icon" className={classes.iconWeather} />
            ) : weather === 8 ? (
              <img src={img8} alt="Icon" className={classes.iconWeather} />
            ) : weather === 11 ? (
              <img src={img11} alt="Icon" className={classes.iconWeather} />
            ) : weather === 12 ? (
              <img src={img12} alt="Icon" className={classes.iconWeather} />
            ) : weather === 13 ? (
              <img src={img13} alt="Icon" className={classes.iconWeather} />
            ) : weather === 14 ? (
              <img src={img14} alt="Icon" className={classes.iconWeather} />
            ) : weather === 15 ? (
              <img src={img15} alt="Icon" className={classes.iconWeather} />
            ) : weather === 16 ? (
              <img src={img16} alt="Icon" className={classes.iconWeather} />
            ) : weather === 17 ? (
              <img src={img17} alt="Icon" className={classes.iconWeather} />
            ) : weather === 18 ? (
              <img src={img18} alt="Icon" className={classes.iconWeather} />
            ) : weather === 20 ? (
              <img src={img20} alt="Icon" className={classes.iconWeather} />
            ) : weather === 21 ? (
              <img src={img21} alt="Icon" className={classes.iconWeather} />
            ) : weather === 22 ? (
              <img src={img22} alt="Icon" className={classes.iconWeather} />
            ) : weather === 23 ? (
              <img src={img23} alt="Icon" className={classes.iconWeather} />
            ) : weather === 24 ? (
              <img src={img24} alt="Icon" className={classes.iconWeather} />
            ) : weather === 25 ? (
              <img src={img25} alt="Icon" className={classes.iconWeather} />
            ) : weather === 26 ? (
              <img src={img26} alt="Icon" className={classes.iconWeather} />
            ) : weather === 29 ? (
              <img src={img29} alt="Icon" className={classes.iconWeather} />
            ) : weather === 30 ? (
              <img src={img30} alt="Icon" className={classes.iconWeather} />
            ) : weather === 31 ? (
              <img src={img31} alt="Icon" className={classes.iconWeather} />
            ) : weather === 32 ? (
              <img src={img32} alt="Icon" className={classes.iconWeather} />
            ) : weather === 33 ? (
              <img src={img33} alt="Icon" className={classes.iconWeather} />
            ) : weather === 34 ? (
              <img src={img34} alt="Icon" className={classes.iconWeather} />
            ) : weather === 35 ? (
              <img src={img35} alt="Icon" className={classes.iconWeather} />
            ) : weather === 38 ? (
              <img src={img38} alt="Icon" className={classes.iconWeather} />
            ) : weather === 39 ? (
              <img src={img39} alt="Icon" className={classes.iconWeather} />
            ) : weather === 41 ? (
              <img src={img41} alt="Icon" className={classes.iconWeather} />
            ) : weather === 42 ? (
              <img src={img42} alt="Icon" className={classes.iconWeather} />
            ) : weather === 44 ? (
              <img src={img44} alt="Icon" className={classes.iconWeather} />
            ) : (
              <img src={imgNA} alt="Icon" className={classes.iconWeather} />
            )}
          </div>
          {}
        </div>
        <p>{text}</p>
      </div>
      <div className={classes.realfeel}>
        <h3>Sensação térmica</h3>
        <h2>{realFeel}º C</h2>
      </div>
    </div>
  );
};

export default Weather;
