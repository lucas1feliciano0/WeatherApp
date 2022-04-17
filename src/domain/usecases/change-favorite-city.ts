import {IUseCase} from './ports/use-case';
import {CityModel} from '../models/city';
import {IStorage} from '../gateways/storage';
import {KeyNotFoundError} from '../errors/key-not-found-error';

export class ChangeFavoriteCity implements IUseCase {
  constructor(private readonly storage: IStorage<CityModel[]>) {}

  async handle(id: number): Promise<void | KeyNotFoundError> {
    const cities = (await this.storage.getItem('cities')) || [];
    const editedCityIndex = cities.findIndex(city => city.id === id);

    if (editedCityIndex === -1) {
      return new KeyNotFoundError();
    } else {
      const city = cities[editedCityIndex];

      cities[editedCityIndex] = {
        ...city,
        isFavorite: !city.isFavorite,
      };
    }

    return this.storage.setItem('cities', cities);
  }
}
