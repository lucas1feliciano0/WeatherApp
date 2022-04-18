import React from 'react';

import {Container, Icon, Label, Row, ValueLabel} from './styles';

interface IProps {
  label: string;
  value: string | number;
  iconName?: string;
  style?: [];
}

const InfoCard: React.FC<IProps> = ({label, value, iconName, style}) => {
  return (
    <Container style={style}>
      <Row>
        <Icon name={iconName} />
        <Label>{label}</Label>
      </Row>
      <ValueLabel>{value}</ValueLabel>
    </Container>
  );
};

export {InfoCard};
