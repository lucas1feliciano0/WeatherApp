import React from 'react';
import {render} from '@testing-library/react-native';

import {Provider} from '../../../../../main/config/TestProvider';
import {InfoCard} from './InfoCard';

describe('InfoCard component', () => {
  it('should render a label and value', () => {
    const label = 'wind';
    const value = '3 km/h';

    const {getByText} = render(
      <Provider>
        <InfoCard label={label} value={value} />
      </Provider>,
    );

    expect(getByText(label)).toBeTruthy();
    expect(getByText(value)).toBeTruthy();
  });
});
