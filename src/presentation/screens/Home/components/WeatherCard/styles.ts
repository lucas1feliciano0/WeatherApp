import styled from 'styled-components/native';
import {MotiView} from 'moti';

export const Container = styled(MotiView).attrs({
  from: {opacity: 0, translateY: 10},
  animate: {opacity: 1, translateY: 0},
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 40%;
  aspect-ratio: 1;
`;

export const Title = styled.Text.attrs({
  includeFontPadding: false,
  textAlignVertical: 'center',
})`
  font-family: ${props => props.theme.fonts.primary.bold};
  color: ${props => props.theme.colors.texts.primary};
  font-size: ${props => props.theme.fontSize.large}px;
  line-height: ${props => props.theme.fontSize.large + 10}px;
`;

export const ColoredTitle = styled(Title)`
  color: ${props => props.theme.colors.primary};
`;

export const Description = styled(Title)`
  color: ${props => props.theme.colors.texts.terciary};
  font-size: ${props => props.theme.fontSize.medium}px;
  line-height: ${props => props.theme.fontSize.medium + 10}px;
`;
