import React from 'react';

import {Container, LoadingIndicator, Text} from './styles';

interface IProps {
  title?: string;
}

const LoadingScreen: React.FC<IProps> = ({title = 'Carregando...'}) => {
  return (
    <Container>
      <LoadingIndicator />
      <Text>{title}</Text>
    </Container>
  );
};

export {LoadingScreen};
