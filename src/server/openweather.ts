import axios, { AxiosPromise, AxiosResponse } from "axios";

export class OpenWeather {
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private apiKey: string;

  private baseApiUrl: string = "https://api.openweathermap.org/data/2.5";

  private getData(url: string, params: Object): AxiosPromise {
    return axios.get(url, { params });
  }

  public byLatLong = (lat: number, long: number): Promise<any> => {
    return this.getData(`${this.baseApiUrl}/weather`, {
      lat: lat,
      lon: long,
      appid: this.apiKey
    }).then(response => {
      return response.data;
    });
  };
}
