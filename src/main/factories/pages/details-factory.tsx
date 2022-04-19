import React from 'react';

import Details from '../../../presentation/screens/Details';

import {makeDateFnsFormatter} from '../date/date-fns-formatter-factory';
import {makeRemoveCity} from '../usecases/remove-city';

const makeDetailsScreen: React.FC = () => {
  return (
    <Details
      removeCity={makeRemoveCity()}
      dateFormatter={makeDateFnsFormatter()}
    />
  );
};

export default makeDetailsScreen;
