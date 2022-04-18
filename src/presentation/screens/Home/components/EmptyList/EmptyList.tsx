import React from 'react';

import sunImage from '../../../../assets/images/sun/sun_cloud_air.png';

import {Button} from '../../styles';
import {Container, Icon, Subtitle, Title} from './styles';

interface IProps {
  onPressAddCity(): void;
  accessibilityHintAddButton?: string;
}

const EmptyList: React.FC<IProps> = ({
  onPressAddCity,
  accessibilityHintAddButton,
}) => {
  return (
    <Container>
      <Icon source={sunImage} />
      <Title>Você ainda não adicionou nenhuma cidade</Title>
      <Subtitle>Clique no botão abaixo para adicionar</Subtitle>
      <Button
        title="Adicionar nova cidade"
        onPress={onPressAddCity}
        acessibilityHint={accessibilityHintAddButton}
      />
    </Container>
  );
};

export {EmptyList};
