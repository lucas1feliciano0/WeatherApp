import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  min-width: 48%;
  background-color: ${props => props.theme.colors.background.terciary};
  border-radius: ${props => props.theme.borderRadius.big}px;
  padding: ${props => props.theme.padding.small}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${props => props.theme.padding.medium}px;
`;

export const Label = styled.Text`
  font-family: ${props => props.theme.fonts.primary.semibold};
  font-size: ${props => props.theme.fontSize.big}px;
  color: ${props => props.theme.colors.texts.secondary};
`;

export const ValueLabel = styled.Text`
  font-family: ${props => props.theme.fonts.primary.bold};
  font-size: ${props => props.theme.fontSize.big}px;
  color: ${props => props.theme.colors.texts.primary};
`;

export const Icon = styled(FeatherIcons).attrs(props => ({
  name: props.name || 'plus',
  color: props.theme.colors.texts.secondary,
  size: props.theme.fontSize.big * 2,
}))`
  margin-right: ${props => props.theme.padding.small}px;
`;
