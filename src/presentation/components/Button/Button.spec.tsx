import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Provider} from '../../../main/config/TestProvider';

import Button from './Button';

describe('Button component', () => {
  it('should render text correctly', () => {
    const text = 'click here';

    const {getByText} = render(
      <Provider>
        <Button title={text} onPress={() => {}} />,
      </Provider>,
    );

    const buttonTitle = getByText(text);
    expect(buttonTitle).toBeTruthy();
  });

  it('should call on press function', () => {
    const text = 'click here';
    const spy = jest.fn();

    const {getByText} = render(
      <Provider>
        <Button title={text} onPress={spy} />,
      </Provider>,
    );

    const button = getByText(text);

    fireEvent.press(button);
    expect(spy).toBeCalled();
  });
});
