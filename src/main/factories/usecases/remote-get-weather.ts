import {AxiosHttpClient} from '../../../infra/http-client/axios-http-client';
import {OWMWeatherRepository} from '../../../infra/repositories/open-weather-map/remote-weather-repository';
import {SearchWeather} from '../../../domain/usecases/get-weather';

const makeRemoteSearchWeather = (): SearchWeather => {
  const httpClient = new AxiosHttpClient(
    'https://api.openweathermap.org/data/2.5',
  );
  const weatherRepo = new OWMWeatherRepository(
    httpClient,
    'bb59b86b3c3e8d60cd1c91e639520982',
  );
  const searchWeather = new SearchWeather(weatherRepo);

  return searchWeather;
};

export {makeRemoteSearchWeather};
