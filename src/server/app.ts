import express = require("express");
import { Logger } from "log4js";
import * as _ from "lodash";

import { isUndefined, loadFromEnvironmentVariable } from "./utils";
import { Routes } from "./routes";
import { OpenWeather } from "./openweather";

import { LoggerFactory } from "./logFactory";
import { logAllRequests } from "./middleware";

const logger: Logger = LoggerFactory.getLogger();

const app = express();
const port = 8080;

const open_weather_api_key = loadFromEnvironmentVariable(
  "OPEN_WEATHER_API_KEY"
);
if (_.isUndefined(open_weather_api_key)) {
  logger.error("OpenWeather API Key is not defined");
}
let openWeatherObj = new OpenWeather(open_weather_api_key);
app.locals["open_weather"] = openWeatherObj;

app.use(logAllRequests);

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/ping", (req, res) => res.send("This is a hello world endpoint!"));
app.get("/weather", Routes.getWeatherByCoords);

app.listen(port, () => {
  logger.info(`SimpleWeatherApp server listening on port ${port}!`);
  logger.debug("Open Weather API Key: ", open_weather_api_key);
});
