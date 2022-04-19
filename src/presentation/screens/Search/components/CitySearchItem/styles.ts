import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.background.secondary};
  padding: ${props => props.theme.padding.big}px
    ${props => props.theme.padding.medium}px;
  border-radius: ${props => props.theme.borderRadius.big}px;
`;

export const Column = styled.View``;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${props => props.theme.fonts.primary.bold};
  color: ${props => props.theme.colors.texts.primary};
  font-size: ${props => props.theme.fontSize.big}px;
  line-height: ${props => props.theme.fontSize.medium + 10}px;
  max-width: 90%;
`;

export const Subtitle = styled(Title)`
  color: ${props => props.theme.colors.texts.terciary};
  font-size: ${props => props.theme.fontSize.medium}px;
`;

export const Button = styled.TouchableOpacity`
  padding: ${props => props.theme.padding.small}px;
  background-color: ${props => props.theme.colors.background.terciary};
  border-radius: ${props => props.theme.borderRadius.big}px;
  padding: ${props => props.theme.padding.small}px;
`;

export const Icon = styled(FeatherIcons).attrs(props => ({
  name: 'plus',
  color: props.theme.colors.texts.primary,
  size: props.theme.fontSize.big,
}))``;
