import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${props => props.theme.fonts.primary.bold};
  font-size: ${props => props.theme.fontSize.big}px;
  color: ${props => props.theme.colors.texts.primary};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(props => ({
  size: 'large',
  color: props.theme.colors.primary,
}))`
  margin-bottom: ${props => props.theme.padding.medium}px;
`;
