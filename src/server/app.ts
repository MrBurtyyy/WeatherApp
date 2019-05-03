import express = require("express");

import { isUndefined, loadFromEnvironmentVariable } from "./utils";
import { Routes } from "./routes";
import { OpenWeather } from "./openweather";

const app = express();
const port = 3000;

const open_weather_api_key = loadFromEnvironmentVariable(
  "OPEN_WEATHER_API_KEY"
);
if (isUndefined(open_weather_api_key)) {
  console.error("OpenWeather API Key is not defined");
}
let openWeatherObj = new OpenWeather(open_weather_api_key);
app.locals["open_weather"] = openWeatherObj;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/hello", (req, res) => res.send("This is a hello world endpoint!"));
app.get("/weather", Routes.getWeatherByCoords);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  console.log("Open Weather API Key: ", open_weather_api_key);
});
