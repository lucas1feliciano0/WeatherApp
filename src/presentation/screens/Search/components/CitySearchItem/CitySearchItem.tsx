import React from 'react';

import {CityModel} from '../../../../../domain/models/city';

import {Button, Column, Container, Icon, Subtitle, Title} from './styles';

interface IProps {
  id: number;
  lat: number;
  lon: number;
  title: string;
  subtitle?: string;
  onPressAdd?: (city: CityModel) => void;
  addButtonAccessibilityHint?: string;
  style?: [];
}

const CitySearchItem: React.FC<IProps> = ({
  id,
  title,
  lat,
  lon,
  subtitle,
  onPressAdd,
  addButtonAccessibilityHint,
  style,
}) => {
  function handlePressAdd() {
    const city: CityModel = {
      id,
      lat,
      lon,
      name: title,
      address: subtitle || '',
    };
    onPressAdd?.(city);
  }

  return (
    <Container style={style}>
      <Column>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Column>
      <Button
        onPress={handlePressAdd}
        accessibilityHint={addButtonAccessibilityHint}>
        <Icon />
      </Button>
    </Container>
  );
};

export {CitySearchItem};
