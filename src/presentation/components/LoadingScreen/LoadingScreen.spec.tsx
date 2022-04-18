import React from 'react';
import {render} from '@testing-library/react-native';

import {Provider} from '../../../main/config/TestProvider';
import {LoadingScreen} from './LoadingScreen';

describe('LoadingScreen component', () => {
  it('should render a text', () => {
    const text = 'loading-test';
    const {getByText} = render(
      <Provider>
        <LoadingScreen title={text} />
      </Provider>,
    );

    expect(getByText(text)).toBeTruthy();
  });
});
