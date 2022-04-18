import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Provider} from '../../../../../main/config/TestProvider';
import {CitySearchItem} from './CitySearchItem';

describe('CitySearchItem component', () => {
  it('should render a title and subtitle', () => {
    const text1 = 'title';
    const text2 = 'subtitle';

    const {getByText} = render(
      <Provider>
        <CitySearchItem id={1} title={text1} subtitle={text2} />
      </Provider>,
    );

    expect(getByText(text1)).toBeTruthy();
    expect(getByText(text2)).toBeTruthy();
  });

  it('should call add function passing the id', () => {
    const text1 = 'title';
    const id = 1;
    const a11y = 'add city button';
    const spy = jest.fn();

    const {getByA11yHint} = render(
      <Provider>
        <CitySearchItem
          id={id}
          title={text1}
          addButtonAccessibilityHint={a11y}
          onPressAdd={spy}
        />
      </Provider>,
    );
    const button = getByA11yHint(a11y);
    fireEvent.press(button);

    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(id);
  });
});
