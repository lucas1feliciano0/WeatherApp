import React from 'react';

import {Container, Text} from './styles';

interface IProps {
  title: string;
  onPress(): void;
  acessibilityHint?: string;
  style?: [];
  textStyle?: [];
}

const Button: React.FC<IProps> = ({
  title,
  onPress,
  acessibilityHint,
  style,
  textStyle,
}) => {
  return (
    <Container
      style={style}
      onPress={onPress}
      accessibilityHint={acessibilityHint}>
      <Text style={textStyle}>{title}</Text>
    </Container>
  );
};

export default Button;
