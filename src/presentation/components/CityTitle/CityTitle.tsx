import React from 'react';

import {Container, Subtitle, Title} from './styles';

interface IProps {
  title: string;
  subtitle?: string;
}

const CityTitle: React.FC<IProps> = ({title, subtitle}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
};

export default CityTitle;
