import {SearchCity} from './search-city';
import {IRemoteCityRepository} from '../repositories/remote-city-repository';

import {mock} from 'jest-mock-extended';

describe('Search city usecase', () => {
  it('should call search function', () => {
    const searchCityRepo = mock<IRemoteCityRepository>();
    const searchCity = new SearchCity(searchCityRepo);
    const name = 'test';

    const spy = jest.spyOn(searchCityRepo, 'search');
    searchCity.handle({name});
    expect(spy).toBeCalledWith(name);
  });
});
