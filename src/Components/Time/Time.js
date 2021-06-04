import React, { useState, useEffect } from "react";
// import moment from "moment";
import moment from "moment-timezone/builds/moment-timezone-with-data";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import api from "../../services/apiTime";
const API_KEY = process.env.REACT_APP_TIMEZONE_API_KEY;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 375,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 60,
    marginBottom: 0,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    width: 130,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
}));

// START FUNCTION
const Time = () => {
  const [data, setData] = useState([]);

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [hora, setHora] = useState("");
  const [minuto, setMinuto] = useState("");
  const [segundo, setSegundo] = useState("");
  const classes = useStyles();

  useEffect(() => {
    async function loadItens() {
      api
        .get(`ip/?token=${API_KEY}`)
        .then((response) => {
          setData(response.data.data);
          console.log(response.data.data);
          setCity(response.data.data.city);
          setState(response.data.data.state_code);

          setHora(response.data.data.datetime.hour_24_wolz);
          setMinuto(response.data.data.datetime.minutes);
          setSegundo(response.data.data.datetime.seconds);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setInterval(() => {
      loadItens();
    }, 600);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.cards}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {hora}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {minuto}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {segundo}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <h1 style={{ margin: 30 }}>
        {city}, {state}
      </h1>
    </div>
  );
};

export default Time;
