import {WeatherModel} from '../../../domain/models/weather';
import {IHttpClient} from '../../../domain/gateways';
import {IRemoteWeatherRepository} from '../../../domain/repositories/remote-weather-repository';

function mapWeather(weather: any): WeatherModel {
  return {
    dt: weather.main.dt,
    description: weather.weather[0]?.description,
    temp: weather.main.temp,
    maxTemperature: weather.main.temp_max,
    minTemperature: weather.main.temp_min,
    feelsLike: weather.main.feels_like,
    humidity: weather.main.humidity,
    windSpeed: weather.wind.speed,
  };
}

export class OWMWeatherRepository implements IRemoteWeatherRepository {
  constructor(
    private readonly httpClient: IHttpClient,
    private readonly appId: string,
  ) {}

  async search(id: number, limit: number = 5): Promise<WeatherModel[]> {
    const response = await this.httpClient.request({
      method: 'get',
      url: '/forecast',
      params: {
        id,
        appid: this.appId,
        cnt: limit,
        lang: 'pt',
        units: 'metric',
      },
    });
    return response.body.list.map(mapWeather);
  }
}
