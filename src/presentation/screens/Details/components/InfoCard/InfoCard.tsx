import React from 'react';

import {Container, Label, Row, ValueLabel} from './styles';

interface IProps {
  label: string;
  value: string;
  style?: [];
}

const InfoCard: React.FC<IProps> = ({label, value, style}) => {
  return (
    <Container style={style}>
      <Row>
        <Label>{label}</Label>
      </Row>
      <ValueLabel>{value}</ValueLabel>
    </Container>
  );
};

export {InfoCard};
