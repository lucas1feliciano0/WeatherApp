import {WeatherModel} from '../../../domain/models/weather';
import {IHttpClient} from '../../../domain/gateways';
import {IRemoteWeatherRepository} from '../../../domain/repositories/remote-weather-repository';

function mapDailyWeather(weather: any) {
  return {
    dt: weather.dt,
    description: weather.weather[0]?.description,
    temp: weather.temp,
    maxTemperature: weather.temp,
    minTemperature: weather.temp,
    feelsLike: weather.feels_like,
    humidity: weather.humidity,
    windSpeed: weather.wind_speed,
  };
}

function mapForecastWeather(weather: any): WeatherModel {
  return {
    dt: weather.dt,
    description: weather.weather[0]?.description,
    temp: weather.temp.day,
    maxTemperature: weather.temp.max,
    minTemperature: weather.temp.min,
    feelsLike: weather.feels_like.day,
    humidity: weather.humidity,
    windSpeed: weather.wind_speed,
  };
}

export class OWMWeatherRepository implements IRemoteWeatherRepository {
  constructor(
    private readonly httpClient: IHttpClient,
    private readonly appId: string,
  ) {}

  async search(
    lat: number,
    lon: number,
    limit: number = 5,
  ): Promise<WeatherModel[]> {
    const response = await this.httpClient.request({
      method: 'get',
      url: '/onecall',
      params: {
        lat,
        lon,
        appid: this.appId,
        cnt: limit,
        lang: 'pt',
        units: 'metric',
        exclude: 'minutely,hourly,alerts',
      },
    });
    const responseBody = response.body;

    return [
      mapDailyWeather(responseBody.current),
      ...responseBody.daily.map(mapForecastWeather),
    ].slice(1, 6);
  }
}
