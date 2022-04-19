import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: ${props => props.theme.padding.medium}px;
  background-color: ${props => props.theme.colors.background.quaternary};
  border-radius: ${props => props.theme.borderRadius.big}px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const Text = styled.Text`
  font-family: ${props => props.theme.fonts.primary.bold};
  color: ${props => props.theme.colors.texts.primary};
  text-align: center;
  font-size: ${props => props.theme.fontSize.medium}px;
`;
