import {ListCity} from './list-city';
import {IStorage} from '../gateways';
import {CityModel} from '../models/city';

import {mock} from 'jest-mock-extended';

function makeSut() {
  const storageMock = mock<IStorage<CityModel[]>>();
  const listCity = new ListCity(storageMock);

  return {storageMock, listCity};
}

describe('List city usecase', () => {
  it('should call get items function', async () => {
    const {listCity, storageMock} = makeSut();

    const spy = jest.spyOn(storageMock, 'getItem');
    await listCity.handle();

    expect(spy).toBeCalled();
  });
});
