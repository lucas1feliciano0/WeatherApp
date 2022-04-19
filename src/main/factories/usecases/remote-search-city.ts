import {AxiosHttpClient} from './../../../infra/http-client/axios-http-client';
import {GPACityRepository} from './../../../infra/repositories/google-places-api/remote-city-repository';
import {SearchCity} from '../../../domain/usecases/search-city';

const makeRemoteSearchCity = (): SearchCity => {
  const baseUrl = 'https://maps.googleapis.com/maps/api';
  const key = 'AIzaSyAwP_dC9dkXRRO0-bJM4id7vQfK-k2TeEo';
  const httpClient = new AxiosHttpClient(baseUrl);
  const cityRepo = new GPACityRepository(httpClient, key);
  const searchCity = new SearchCity(cityRepo);

  return searchCity;
};

export {makeRemoteSearchCity};
