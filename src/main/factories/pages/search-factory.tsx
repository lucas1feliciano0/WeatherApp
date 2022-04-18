import React from 'react';

import Search from '../../../presentation/screens/Search';

import {makeRemoteSearchCity, makeLocalSaveCity} from '../usecases';

const makeSearchScreen: React.FC = () => {
  return (
    <Search
      searchCity={makeRemoteSearchCity()}
      saveCity={makeLocalSaveCity()}
    />
  );
};

export default makeSearchScreen;
