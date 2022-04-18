import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import {CityModel} from './../../../domain/models/city';

import HeaderComponent from '../../components/Header';
import {Input as InputComponent} from '../../components/Input';

import {CitySearchItem as CitySearchItemComponent} from './components/CitySearchItem';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  padding: ${props => props.theme.padding.big}px;
`;

export const Header = styled(HeaderComponent)``;

export const Input = styled(InputComponent)``;

export const CitySearchItem = styled(CitySearchItemComponent)`
  margin-bottom: ${props => props.theme.padding.medium}px;
`;

export const List = styled(FlatList as new () => FlatList<CityModel[]>).attrs(
  props => ({
    contentContainerStyle: {
      marginTop: props.theme.padding.medium,
    },
  }),
)``;
