import {KeyNotFoundError} from './../errors/key-not-found-error';
import {ChangeFavoriteCity} from './change-favorite-city';
import {CityModel} from '../models/city';
import {IStorage} from '../gateways';

import {mock} from 'jest-mock-extended';

function makeSut() {
  const storageMock = mock<IStorage<CityModel[]>>();
  const removeCity = new ChangeFavoriteCity(storageMock);

  return {storageMock, removeCity};
}

describe('Remove city usecase', () => {
  it('should call get item function', async () => {
    const {removeCity, storageMock} = makeSut();

    const spy = jest.spyOn(storageMock, 'getItem');
    await removeCity.handle(1);

    expect(spy).toBeCalled();
  });

  it('should return a key not found error if city dont exists', async () => {
    const {removeCity} = makeSut();

    const result = await removeCity.handle(1);
    expect(result).toBeInstanceOf(KeyNotFoundError);
  });

  it('should change city`s isFavorite prop to true', async () => {
    const {removeCity, storageMock} = makeSut();
    const city: CityModel = {
      id: 1,
      lat: -35,
      lon: -6,
      address: 'BR',
      name: 'Tangará',
      isFavorite: false,
    };

    storageMock.getItem.mockReturnValueOnce(
      new Promise(resolve => resolve([city])),
    );

    const spy = jest.spyOn(storageMock, 'setItem');
    await removeCity.handle(1);

    expect(spy).toBeCalledWith('cities', [
      {
        ...city,
        isFavorite: true,
      },
    ]);
  });
});
