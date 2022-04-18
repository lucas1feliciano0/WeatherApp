import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Provider} from '../../../../../main/config/TestProvider';
import {EmptyList} from './EmptyList';

describe('EmptyList component', () => {
  it('should call add city function', () => {
    const a11y = 'add city button';
    const spy = jest.fn();

    const {getByA11yHint} = render(
      <Provider>
        <EmptyList onPressAddCity={spy} accessibilityHintAddButton={a11y} />
      </Provider>,
    );
    const button = getByA11yHint(a11y);

    fireEvent.press(button);
    expect(spy).toBeCalled();
  });
});
