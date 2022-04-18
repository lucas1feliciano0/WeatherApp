import styled from 'styled-components/native';

import ButtonComponent from '../../components/Button/Button';
import CityTitleComponent from '../../components/CityTitle/CityTitle';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  padding: ${props => props.theme.padding.big}px;
`;

export const Button = styled(ButtonComponent)``;

export const CityTitle = styled(CityTitleComponent)``;
