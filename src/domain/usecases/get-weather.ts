import {IUseCase} from './ports/use-case';
import {WeatherModel} from './../models/weather';
import {IRemoteWeatherRepository} from '../repositories/remote-weather-repository';

export type SearchWeatherParams = {
  lat: number;
  lon: number;
};

export class SearchWeather implements IUseCase {
  constructor(private readonly weatherRepository: IRemoteWeatherRepository) {}

  async handle(data: SearchWeatherParams): Promise<WeatherModel[]> {
    return this.weatherRepository.search(data.lat, data.lon);
  }
}
