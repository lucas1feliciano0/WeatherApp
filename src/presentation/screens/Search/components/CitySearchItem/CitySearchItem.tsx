import React from 'react';

import {Button, Column, Container, Icon, Subtitle, Title} from './styles';

interface IProps {
  id: number;
  title: string;
  subtitle?: string;
  onPressAdd?: (id: number) => void;
  addButtonAccessibilityHint?: string;
}

const CitySearchItem: React.FC<IProps> = ({
  id,
  title,
  subtitle,
  onPressAdd,
  addButtonAccessibilityHint,
}) => {
  function handlePressAdd() {
    onPressAdd?.(id);
  }

  return (
    <Container>
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
