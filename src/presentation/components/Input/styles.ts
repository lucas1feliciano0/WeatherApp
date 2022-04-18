import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: ${props => props.theme.borderRadius.big}px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.texts.secondary};
`;

export const TextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: `${props.theme.colors.texts.black}80`,
}))`
  min-width: 70%;
  font-family: ${props => props.theme.fonts.primary.semibold};
  text-align: center;
  color: ${props => props.theme.colors.texts.black};
`;
