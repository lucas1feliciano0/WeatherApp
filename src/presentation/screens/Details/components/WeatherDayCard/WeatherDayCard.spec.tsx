import React from 'react';
import {render} from '@testing-library/react-native';

import {Provider} from '../../../../../main/config/TestProvider';
import {WeatherDayCard} from './WeatherDayCard';

describe('WeatherDayCard component', () => {
  it('should render a day', () => {
    const day = '18/04';
    const value = 34;

    const {getByText} = render(
      <Provider>
        <WeatherDayCard day={day} value={value} />
      </Provider>,
    );

    expect(getByText(day)).toBeTruthy();
  });
});
