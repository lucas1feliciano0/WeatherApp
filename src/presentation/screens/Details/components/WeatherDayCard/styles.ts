import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 28%;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.big}px;
  padding: ${props => props.theme.padding.small}px;
`;

export const DayLabel = styled.Text`
  font-family: ${props => props.theme.fonts.primary.semibold};
  font-size: ${props => props.theme.fontSize.big}px;
  color: ${props => props.theme.colors.texts.secondary};
`;

export const ValueLabel = styled.Text`
  font-family: ${props => props.theme.fonts.primary.bold};
  font-size: ${props => props.theme.fontSize.big_2}px;
  color: ${props => props.theme.colors.texts.primary};
  margin: auto;
`;
