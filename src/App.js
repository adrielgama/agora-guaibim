import React from "react";
import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Time from "./Components/Time/Time";
import Header from "./Components/Header/Header";
import Weather from "./Components/Weather/Weather";

function App() {
  return (
    <React.Fragment className="App">
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <Time />
        <div className="weather__container">
          <Weather />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
