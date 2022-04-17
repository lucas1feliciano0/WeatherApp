import {WeatherModel} from '../models/weather';

export interface IRemoteWeatherRepository {
  search(id: number): Promise<WeatherModel[]>;
}
