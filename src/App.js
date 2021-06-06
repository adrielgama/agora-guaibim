import React from "react";
import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Time from "./Components/Time/Time";
import Header from "./Components/Header/Header";

function App() {
  return (
    <React.Fragment className="App">
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <Time />
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
