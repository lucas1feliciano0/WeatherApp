import {IUseCase} from './ports/use-case';
import {CityModel} from './../models/city';
import {IRemoteCityRepository} from '../repositories/remote-city-repository';

export type SearchCityParams = {
  name: string;
};

export class SearchCity implements IUseCase {
  constructor(private readonly cityRepository: IRemoteCityRepository) {}

  async handle(data: SearchCityParams): Promise<CityModel[]> {
    return this.cityRepository.search(data.name);
  }
}
