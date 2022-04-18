import React from 'react';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';

import sunImage from '../../../presentation/assets/images/sun/sun_cloud_air.png';

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
  description?: string;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const WeatherCard: React.FC<IProps> = ({
  title,
  description,
  style,
  imageStyle,
}) => {
  return (
    <Container style={style}>
      <Icon source={sunImage} style={imageStyle} />
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
