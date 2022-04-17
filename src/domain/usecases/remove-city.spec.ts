import {KeyNotFoundError} from './../errors/key-not-found-error';
import {RemoveCity} from './remove-city';
import {CityModel} from '../models/city';
import {IStorage} from '../gateways';

import {mock} from 'jest-mock-extended';

function makeSut() {
  const storageMock = mock<IStorage<CityModel[]>>();
  const removeCity = new RemoveCity(storageMock);

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

  it('should call set item function', async () => {
    const {removeCity, storageMock} = makeSut();
    const city: CityModel = {
      id: 1,
      country: 'BR',
      name: 'Tangará',
      isFavorite: false,
    };

    storageMock.getItem.mockReturnValueOnce(
      new Promise(resolve => resolve([city])),
    );

    const spy = jest.spyOn(storageMock, 'setItem');
    await removeCity.handle(1);

    expect(spy).toBeCalled();
  });
});
