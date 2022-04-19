import React from 'react';
import {ImageStyle, StyleProp} from 'react-native';

import {getDayPeriod} from '../../utils/getDayPeriod';
import {getWeatherIcon} from '../../utils/getWeatherIcon';

import {Container} from './styles';

interface IProps {
  weather: string;
  style?: StyleProp<ImageStyle>;
}

const WeatherIcon: React.FC<IProps> = ({weather, style}) => {
  const currentDayPeriod = getDayPeriod();

  return (
    <Container
      style={style}
      source={getWeatherIcon(currentDayPeriod, weather)}
    />
  );
};

export {WeatherIcon};
