import React from 'react';

import Home from '../../../presentation/screens/Home';

import {
  makeLocalListCity,
  makeRemoteSearchWeather,
  makeFavoriteCity,
} from '../usecases';

const makeHomeScreen: React.FC = () => {
  return (
    <Home
      listCities={makeLocalListCity()}
      getWeather={makeRemoteSearchWeather()}
      favoriteCity={makeFavoriteCity()}
    />
  );
};

export default makeHomeScreen;
