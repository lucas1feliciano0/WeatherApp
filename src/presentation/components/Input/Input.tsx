import React from 'react';

import {Container, TextInput} from './styles';

interface IProps {
  onChangeText: (value: string) => void;
  placeholder?: string;
  style?: [];
}

const Input: React.FC<IProps> = ({
  onChangeText,
  style,
  placeholder = 'Insira o texto aqui...',
}) => {
  return (
    <Container style={style}>
      <TextInput onChangeText={onChangeText} placeholder={placeholder} />
    </Container>
  );
};

export {Input};
