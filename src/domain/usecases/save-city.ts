import {IUseCase} from './ports/use-case';
import {CityModel} from './../models/city';
import {IStorage} from './../gateways/storage';
import {CityExistsError} from '../errors/city-exists-error';

export class SaveCity implements IUseCase {
  constructor(private readonly storage: IStorage<CityModel[]>) {}

  async handle(data: CityModel): Promise<void | CityExistsError> {
    const cities = (await this.storage.getItem('cities')) || [];

    if (cities.find(city => city.id === data.id)) {
      return new CityExistsError();
    } else {
      cities.push(data);
    }

    return this.storage.setItem('cities', cities);
  }
}
