import {CityModel} from '../models/city';

export interface IRemoteCityRepository {
  search(text: string): Promise<CityModel[]>;
}
