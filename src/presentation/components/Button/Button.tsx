import React from 'react';

import {Container, Text} from './styles';

interface IProps {
  title: string;
  onPress(): void;
  acessibilityHint?: string;
  disabled?: boolean;
  style?: [];
  textStyle?: [];
}

const Button: React.FC<IProps> = ({
  title,
  onPress,
  acessibilityHint,
  style,
  textStyle,
  disabled,
}) => {
  return (
    <Container
      style={style}
      disabled={disabled}
      onPress={onPress}
      accessibilityHint={acessibilityHint}>
      <Text style={textStyle}>{title}</Text>
    </Container>
  );
};

export {Button};
