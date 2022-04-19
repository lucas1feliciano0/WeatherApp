import React from 'react';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';

import {
  ColoredTitle,
  Column,
  Container,
  Description,
  Icon,
  Title,
} from './styles';

interface IProps {
  title: string | number;
  weather: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const WeatherCard: React.FC<IProps> = ({
  title,
  weather,
  description,
  style,
  imageStyle,
}) => {
  return (
    <Container style={style}>
      <Icon weather={weather} style={imageStyle} />
      <Column>
        <Title>
          {title} <ColoredTitle>º</ColoredTitle>
        </Title>
        <Description>{description}</Description>
      </Column>
    </Container>
  );
};

export {WeatherCard};
