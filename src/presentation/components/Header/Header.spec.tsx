import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Provider} from '../../../main/config/TestProvider';
import {Header} from './index';
import {Text} from 'react-native';

describe('Header component', () => {
  it('should call left button function', () => {
    const a11y = 'left-button';
    const spy = jest.fn();

    const {getByA11yHint} = render(
      <Provider>
        <Header
          onPressLeft={spy}
          leftAccessibilityHint={a11y}
          onPressRight={() => {}}
        />
      </Provider>,
    );
    const button = getByA11yHint(a11y);
    fireEvent.press(button);

    expect(spy).toBeCalled();
  });

  it('should call right button function', () => {
    const a11y = 'right-button';
    const spy = jest.fn();

    const {getByA11yHint} = render(
      <Provider>
        <Header
          onPressLeft={() => {}}
          rightAccessibilityHint={a11y}
          onPressRight={spy}
        />
      </Provider>,
    );
    const button = getByA11yHint(a11y);
    fireEvent.press(button);

    expect(spy).toBeCalled();
  });

  it('should render children', () => {
    const children = <Text>children</Text>;
    const {getByText} = render(
      <Provider>
        <Header onPressLeft={() => {}} onPressRight={() => {}}>
          {children}
        </Header>
      </Provider>,
    );

    expect(getByText('children')).toBeTruthy();
  });
});
