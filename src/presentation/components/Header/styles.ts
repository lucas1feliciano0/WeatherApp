import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  padding: ${props => props.theme.padding.small}px;
  background-color: ${props => props.theme.colors.background.quaternary};
  border-radius: ${props => props.theme.borderRadius.big}px;
`;

export const Icon = styled(FeatherIcons).attrs(props => ({
  name: props.name || 'plus',
  color: props.theme.colors.texts.primary,
  size: props.theme.fontSize.big,
}))``;
