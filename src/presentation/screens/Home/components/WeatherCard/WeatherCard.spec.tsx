import React from 'react';
import {render} from '@testing-library/react-native';

import {Provider} from '../../../../../main/config/TestProvider';
import {WeatherCard} from './index';

describe('WeatherCard component', () => {
  it('should render a title', () => {
    const text = 'title';
    const {getByText} = render(
      <Provider>
        <WeatherCard title={text} />
      </Provider>,
    );

    expect(getByText(text)).toBeTruthy();
  });

  it('should render a title and description', () => {
    const text = 'title';
    const text2 = 'description';
    const {getByText} = render(
      <Provider>
        <WeatherCard title={text} description={text2} />
      </Provider>,
    );

    expect(getByText(text)).toBeTruthy();
    expect(getByText(text2)).toBeTruthy();
  });
});
