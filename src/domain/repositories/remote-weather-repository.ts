import {WeatherModel} from '../models/weather';

export interface IRemoteWeatherRepository {
  search(lat: number, lon: number): Promise<WeatherModel[]>;
}
