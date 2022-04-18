import {WeatherModel} from './weather';

export type CityModel = {
  id: number;
  name: string;
  country: string;
  isFavorite?: boolean;

  weather?: WeatherModel[];
};
