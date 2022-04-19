import {WeatherModel} from './weather';

export type CityModel = {
  id: number;
  lat: number;
  lon: number;
  name: string;
  address: string;
  isFavorite?: boolean;

  weather?: WeatherModel[];
};
