import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';

import {Button as ButtonComponent} from '../../components/Button';
import {CityTitle as CityTitleComponent} from '../../components/CityTitle';
import {Header as HeaderComponent} from '../../components/Header';
import {LoadingScreen as LoadingScreenComponent} from '../../components/LoadingScreen';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  padding: ${props => props.theme.padding.big}px;
`;

export const LoadingScreen = styled(LoadingScreenComponent)``;

export const Button = styled(ButtonComponent)``;

export const Header = styled(HeaderComponent)``;

export const CityTitle = styled(CityTitleComponent)``;

export const SwipeContainer = styled(Carousel)``;
