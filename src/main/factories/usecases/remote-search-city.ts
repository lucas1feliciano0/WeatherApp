import {AxiosHttpClient} from './../../../infra/http-client/axios-http-client';
import {OWMCityRepository} from './../../../infra/repositories/open-weather-map/remote-city-repository';
import {SearchCity} from '../../../domain/usecases/search-city';

const makeRemoteSearchCity = (): SearchCity => {
  const httpClient = new AxiosHttpClient(
    'https://api.openweathermap.org/data/2.5',
  );
  const cityRepo = new OWMCityRepository(
    httpClient,
    'bb59b86b3c3e8d60cd1c91e639520982',
  );
  const searchCity = new SearchCity(cityRepo);

  return searchCity;
};

export {makeRemoteSearchCity};
