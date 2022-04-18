import React from 'react';

import Home from '../../../presentation/screens/Home';

import {makeLocalListCity} from '../usecases';

const makeHomeScreen: React.FC = () => {
  return <Home listCities={makeLocalListCity()} />;
};

export default makeHomeScreen;
