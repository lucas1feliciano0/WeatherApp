import React from 'react';

import {Container, DayLabel, ValueLabel} from './styles';

interface IProps {
  day: string;
  value: string | number;
  style?: [];
}

const WeatherDayCard: React.FC<IProps> = ({day, value, style}) => {
  return (
    <Container style={style}>
      <DayLabel>{day}</DayLabel>
      <ValueLabel>{value} º</ValueLabel>
    </Container>
  );
};

export {WeatherDayCard};
