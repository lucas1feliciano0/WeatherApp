import React from 'react';
import {render} from '@testing-library/react-native';

import {Provider} from '../../../main/config/TestProvider';
import CityTitle from './CityTitle';

describe('CityTitle component', () => {
  it('should render a title', () => {
    const text = 'title';
    const {getByText} = render(
      <Provider>
        <CityTitle title={text} />
      </Provider>,
    );

    expect(getByText(text)).toBeTruthy();
  });

  it('should render a title and subtitle', () => {
    const text = 'title';
    const text2 = 'subtitle';
    const {getByText} = render(
      <Provider>
        <CityTitle title={text} subtitle={text2} />
      </Provider>,
    );

    expect(getByText(text)).toBeTruthy();
    expect(getByText(text2)).toBeTruthy();
  });
});
