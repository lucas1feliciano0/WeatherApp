import {AxiosHttpClient} from '../../../infra/http-client/axios-http-client';
import Config from 'react-native-config';

import {OWMWeatherRepository} from '../../../infra/repositories/open-weather-map/remote-weather-repository';
import {SearchWeather} from '../../../domain/usecases/get-weather';

const makeRemoteSearchWeather = (): SearchWeather => {
  const httpClient = new AxiosHttpClient(
    'https://api.openweathermap.org/data/2.5',
  );
  const weatherRepo = new OWMWeatherRepository(httpClient, Config.OWM_APP_ID);
  const searchWeather = new SearchWeather(weatherRepo);

  return searchWeather;
};

export {makeRemoteSearchWeather};
