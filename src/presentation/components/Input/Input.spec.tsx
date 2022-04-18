import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Provider} from '../../../main/config/TestProvider';
import {Input} from './Input';

describe('Input component', () => {
  it('should render with the received placeholder', () => {
    const placeholder = 'test';
    const {getByPlaceholderText} = render(
      <Provider>
        <Input placeholder={placeholder} onChangeText={() => {}} />
      </Provider>,
    );

    expect(getByPlaceholderText(placeholder)).toBeTruthy();
  });

  it('should call on change function when user input', () => {
    const placeholder = 'test';
    const value = 'new value';
    const spy = jest.fn();

    const {getByPlaceholderText} = render(
      <Provider>
        <Input placeholder={placeholder} onChangeText={spy} />
      </Provider>,
    );
    const input = getByPlaceholderText(placeholder);
    fireEvent.changeText(input, value);

    expect(spy).toBeCalledWith(value);
  });
});
