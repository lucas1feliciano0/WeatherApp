import React from 'react';

import Details from '../../../presentation/screens/Details';

import {makeRemoveCity} from '../usecases/remove-city';

const makeDetailsScreen: React.FC = () => {
  return <Details removeCity={makeRemoveCity()} />;
};

export default makeDetailsScreen;
