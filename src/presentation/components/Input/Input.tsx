import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, TextInput} from './styles';

interface IProps {
  onChangeText: (value: string) => void;
  placeholder?: string;
  style?: [];
  inputProps?: TextInputProps;
}

const Input: React.FC<IProps> = ({
  onChangeText,
  style,
  placeholder = 'Insira o texto aqui...',
  inputProps,
}) => {
  return (
    <Container style={style}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        {...inputProps}
      />
    </Container>
  );
};

export {Input};
