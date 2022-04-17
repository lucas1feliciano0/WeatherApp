import {IUseCase} from './ports/use-case';
import {CityModel} from '../models/city';
import {IStorage} from '../gateways/storage';
import {KeyNotFoundError} from '../errors/key-not-found-error';

export class RemoveCity implements IUseCase {
  constructor(private readonly storage: IStorage<CityModel[]>) {}

  async handle(id: number): Promise<void | KeyNotFoundError> {
    const cities = (await this.storage.getItem('cities')) || [];
    const cityIndex = cities.findIndex(city => city.id === id);

    if (cityIndex === -1) {
      return new KeyNotFoundError();
    } else {
      cities.splice(cityIndex, 1);
    }

    return this.storage.setItem('cities', cities);
  }
}
