import React, { useState, useEffect } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import api from "../../services/apiTime";

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


const Time = () => {
  const [data, setData] = useState("");
  const classes = useStyles();

  async function loadTimezone() {
    await api
      .get(`Bahia`)
      .then((response) => {
        setData(response.data.datetime);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    async function syncLoad() {
      await loadTimezone();
    }
    setInterval(() => {
      syncLoad()
    }, 1000);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.cards}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="#fff" gutterBottom>
              <div>{moment(data).format("HH")}</div>
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="#fff" gutterBottom>
              <div>{moment(data).format("mm")}</div>
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="#fff" gutterBottom>
              <div>{moment(data).format("ss")}</div>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <h1 style={{ margin: 30 }}>Salvador, BA</h1>
    </div>
  );
};

export default Time;