import React, { useState, useEffect } from "react";
// import moment from "moment";
// import moment from "moment-timezone/builds/moment-timezone-with-data";

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
  card: {
    width: 120,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
}));

// START FUNCTION
const Time = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);

  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  const [hora, setHora] = useState("");
  const [minuto, setMinuto] = useState("");
  const [segundo, setSegundo] = useState("");
  const classes = useStyles();

  useEffect(() => {
    async function loadItens() {
      function novaHora() {
        function pad(s) {
          return s < 10 ? "0" + s : s;
        }
        var date = new Date();
        return [
          setHora(date.getHours()),
          setMinuto(date.getMinutes()),
          setSegundo(date.getSeconds()),
        ].map(pad);
      }
      novaHora();
    }

    setInterval(() => {
      loadItens();
    }, 990);
  }, []);

  // const [actual, setActual] = useState("");

  // console.log(novaHora());

  return (
    <div className={classes.root}>
      <div className={classes.cards}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="#fff" gutterBottom>
              {hora}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="#fff" gutterBottom>
              {minuto}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="#fff" gutterBottom>
              {segundo}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <h1 style={{ margin: 30 }}>Salvador, BA</h1>
    </div>
  );
};

export default Time;

// useEffect(() => {
//   async function loadItens() {
//     api
//       .get(`ip/?token=${API_KEY}`)
//       .then((response) => {
//         setData(response.data.data);
//         // console.log(response.data.data);
//         // setCity(response.data.data.city);
//         // setState(response.data.data.state_code);

//         setHora(response.data.data.datetime.hour_24_wilz);
//         setMinuto(response.data.data.datetime.minutes);
//         setSegundo(response.data.data.datetime.seconds);
//       })
//       .catch((err) => {
//         // console.log(err);
//       });
//   }

//   setInterval(() => {
//     loadItens();
//   }, 990);
// }, []);
