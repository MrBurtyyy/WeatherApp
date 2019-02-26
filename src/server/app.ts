import express = require("express");
import { Utils } from "./utils";

const app = express();
const port = 3000;

const open_weather_api_key = Utils.loadFromEnvironmentVariable(
  "OPEN_WEATHER_API_KEY"
);

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/hello", (req, res) => res.send("This is a hello world endpoint!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  console.log("Open Weather API Key: ", open_weather_api_key);
});
