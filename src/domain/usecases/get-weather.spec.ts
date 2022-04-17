import {SearchWeather} from './get-weather';
import {IRemoteWeatherRepository} from '../repositories/remote-weather-repository';

import {mock} from 'jest-mock-extended';

describe('Get weather usecase', () => {
  it('should call search function', () => {
    const remoteWeatherRepo = mock<IRemoteWeatherRepository>();
    const searchWeather = new SearchWeather(remoteWeatherRepo);
    const id = 1;

    const spy = jest.spyOn(remoteWeatherRepo, 'search');
    searchWeather.handle({id});
    expect(spy).toBeCalledWith(id);
  });
});
