import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.primary.bold};
  color: ${props => props.theme.colors.texts.primary};
  font-size: ${props => props.theme.fontSize.big}px;
`;

export const Subtitle = styled(Title).attrs({
  numberOfLines: 1,
})`
  color: ${props => props.theme.colors.texts.terciary};
  font-size: ${props => props.theme.fontSize.medium}px;
`;
