import React from 'react';

import defaultImage from '../../../../assets/images/others/default.png';

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
      <Icon source={defaultImage} />
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
