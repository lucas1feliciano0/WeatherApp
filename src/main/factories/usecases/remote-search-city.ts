import Config from 'react-native-config';

import {AxiosHttpClient} from './../../../infra/http-client/axios-http-client';
import {GPACityRepository} from './../../../infra/repositories/google-places-api/remote-city-repository';
import {SearchCity} from '../../../domain/usecases/search-city';

const makeRemoteSearchCity = (): SearchCity => {
  const baseUrl = 'https://maps.googleapis.com/maps/api';
  const key = Config.GPA_API_KEY;

  const httpClient = new AxiosHttpClient(baseUrl);
  const cityRepo = new GPACityRepository(httpClient, key);
  const searchCity = new SearchCity(cityRepo);

  return searchCity;
};

export {makeRemoteSearchCity};
