import styled from 'styled-components/native';

import {Button as ButtonComponent} from '../../components/Button';
import {CityTitle as CityTitleComponent} from '../../components/CityTitle';
import {Header as HeaderComponent} from '../../components/Header';
import {WeatherCard as WeatherCardComponent} from '../../components/WeatherCard';

import {WeatherDayCard as WeatherDayCardComponent} from './components/WeatherDayCard/WeatherDayCard';
import {InfoCard as InfoCardComponent} from './components/InfoCard';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  padding: ${props => props.theme.padding.big}px;
`;

export const Button = styled(ButtonComponent)``;

export const Header = styled(HeaderComponent)``;

export const CityTitle = styled(CityTitleComponent)``;

export const InfoContainer = styled.View`
  flex: 2;
`;

export const InfoList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WeatherList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    height: '80%',
  },
  fadingEdgeLength: 30,
})``;

export const InfoCard = styled(InfoCardComponent)`
  margin-bottom: ${props => props.theme.padding.medium}px;
`;

export const WeatherDayCard = styled(WeatherDayCardComponent)`
  margin-right: ${props => props.theme.padding.medium}px;
`;

export const WeatherCard = styled(WeatherCardComponent).attrs(props => ({
  imageStyle: {
    width: '45%',
    marginRight: props.theme.padding.medium,
  },
}))`
  flex-direction: row;
`;
