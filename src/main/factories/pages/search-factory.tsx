import React from 'react';

import Search from '../../../presentation/screens/Search';

import {makeRemoteSearchCity} from '../usecases';

const makeHomeScreen: React.FC = () => {
  return <Search searchCity={makeRemoteSearchCity()} />;
};

export default makeHomeScreen;
