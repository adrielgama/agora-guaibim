import React, { useState } from "react";

import api from "../../services/apiWeather";

const Weather = () => {
  const [clima, setClima] = useState();

  return (
    <div>
      <h1>Weather</h1>
    </div>
  );
};

export default Weather;
