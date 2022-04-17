import {IUseCase} from './ports/use-case';
import {CityModel} from './../models/city';
import {IStorage} from './../gateways/storage';

export class ListCity implements IUseCase {
  constructor(private readonly storage: IStorage<CityModel[]>) {}

  async handle(): Promise<CityModel[]> {
    const cities = await this.storage.getItem('cities');

    return cities || [];
  }
}
