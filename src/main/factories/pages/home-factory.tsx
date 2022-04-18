import React from 'react';

import Home from '../../../presentation/screens/Home';

import {makeLocalListCity, makeRemoteSearchWeather} from '../usecases';

const makeHomeScreen: React.FC = () => {
  return (
    <Home
      listCities={makeLocalListCity()}
      getWeather={makeRemoteSearchWeather()}
    />
  );
};

export default makeHomeScreen;
