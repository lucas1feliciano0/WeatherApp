import React from 'react';

import sunImage from '../../../../assets/images/sun/sun_cloud_air.png';

import {ColoredTitle, Container, Description, Icon, Title} from './styles';

interface IProps {
  title: string | number;
  description?: string;
}

const WeatherCard: React.FC<IProps> = ({title, description}) => {
  return (
    <Container>
      <Icon source={sunImage} />
      <Title>
        {title} <ColoredTitle>º</ColoredTitle>
      </Title>
      <Description>{description}</Description>
    </Container>
  );
};

export {WeatherCard};
