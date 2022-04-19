import {CityModel} from './../models/city';
import {IStorage} from './../gateways/storage';
import {SaveCity} from './save-city';
import {CityExistsError} from './../errors/city-exists-error';

import {mock} from 'jest-mock-extended';

function makeSut() {
  const storageMock = mock<IStorage<CityModel[]>>();
  const saveCity = new SaveCity(storageMock);

  return {storageMock, saveCity};
}

describe('Save city usecase', () => {
  it('should call save city function', async () => {
    const {saveCity, storageMock} = makeSut();
    const city: CityModel = {
      id: 1,
      lat: -35,
      lon: -6,
      address: 'BR',
      name: 'Tangará',
      isFavorite: false,
    };

    const spy = jest.spyOn(storageMock, 'setItem');
    await saveCity.handle(city);

    expect(spy).toBeCalled();
  });

  it('should return an error if city already saved', async () => {
    const {saveCity, storageMock} = makeSut();
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

    const result = await saveCity.handle(city);

    expect(result).toBeInstanceOf(CityExistsError);
  });
});
