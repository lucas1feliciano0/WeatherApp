import styled from 'styled-components/native';

export const Container = styled.View`
  margin: auto 0;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.primary.bold};
  color: ${props => props.theme.colors.texts.primary};
  text-align: center;
  font-size: ${props => props.theme.fontSize.medium}px;
  margin-bottom: ${props => props.theme.padding.small}px;
`;

export const Subtitle = styled(Title)`
  font-family: ${props => props.theme.fonts.primary.regular};
  font-size: ${props => props.theme.fontSize.small}px;
  color: ${props => props.theme.colors.texts.terciary};
  margin-bottom: ${props => props.theme.padding.big * 2}px;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 50%;
  aspect-ratio: 1;
  margin: 0 auto;
`;
