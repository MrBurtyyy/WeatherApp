import { Request, Response } from "express";
import { isUndefined } from "./utils";
import { OpenWeather } from "./openweather";

const latMin = -90;
const latMax = 90;
const longMin = -180;
const longMax = 180;

export class Routes {
  public static getWeatherByCoords = function(
    req: Request,
    res: Response
  ): void {
    const lat: number = req.query["lat"];
    const long: number = req.query["long"];

    // Make sure that the values we have pulled from the query parameters are:
    // 1. Not undefined (i.e. not supplied)
    // 2. Are inbetween their ranges
    let latValid = !isUndefined(lat) && lat >= latMin && lat <= latMax;
    let longValid = !isUndefined(long) && long >= longMin && long <= longMax;

    // Make sure that both of the inputs are valid,
    // and return an error if not.
    let validInput = latValid && longValid;
    if (!validInput) {
      res.status(400);
      res.send({ error: "Invalid latitude and longitude supplied" });
      return;
    }

    const openWeather: OpenWeather = req.app.locals["open_weather"];

    console.log("Latitude: ", lat);
    console.log("Longitude: ", long);

    openWeather.byLatLong(lat, long).then(data => res.send(data));
  };
}
