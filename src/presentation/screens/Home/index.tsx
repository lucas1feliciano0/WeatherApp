/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {CityModel} from '../../../domain/models/city';
import {SearchWeather} from '../../../domain/usecases/get-weather';
import {ListCity} from '../../../domain/usecases/list-city';

import {RootStackParamList} from '../../../main/routes/router';

import {EmptyList} from './components/EmptyList';
import WeatherCarousel from './components/WeatherCarousel/WeatherCarousel';

import {Button, CityTitle, Container, Header} from './styles';

type HomeNavigation = StackNavigationProp<RootStackParamList, 'Home'>;

interface IProps {
  listCities: ListCity;
  getWeather: SearchWeather;
}

const Home: React.FC<IProps> = ({listCities, getWeather}) => {
  const navigation = useNavigation<HomeNavigation>();

  const [cities, setCities] = useState<CityModel[]>([]);
  const [activeCity, setActiveCity] = useState<CityModel | undefined>(
    cities[0] || undefined,
  );

  function handleChangeActiveCity(city: CityModel) {
    setActiveCity(city);
  }

  function handleNavigateToAddCity() {
    // TODO: handle navigation
    navigation.navigate('Search');
  }

  function handleFavoriteCity() {
    // TODO: handle navigation
  }

  function clear() {
    setCities([]);
    setActiveCity(undefined);
  }

  async function loadCities() {
    const savedCities = await listCities.handle();
    setCities(savedCities);
    handleChangeActiveCity(savedCities[0]);
  }

  useFocusEffect(
    useCallback(() => {
      loadCities();
    }, []),
  );

  useEffect(() => {
    async function loadActiveCityWeather(id: number) {
      if (cities.length > 0) {
        const cityIndex = cities.findIndex(city => city.id === id);
        const citiesCopy = [...cities];
        const weatherResponse = await getWeather.handle({
          id,
        });
        citiesCopy[cityIndex] = {
          ...citiesCopy[cityIndex],
          weather: weatherResponse,
        };

        setCities(citiesCopy);
      }
    }

    if (activeCity) {
      loadActiveCityWeather(activeCity.id);
    }
  }, [activeCity]);

  useEffect(() => {
    return clear;
  }, []);

  return (
    <Container>
      {cities.length === 0 ? (
        <EmptyList
          onPressAddCity={handleNavigateToAddCity}
          accessibilityHintAddButton="Ir para a tela de pesquisar cidades"
        />
      ) : (
        <>
          <Header
            rightButtonIcon="heart"
            onPressLeft={handleNavigateToAddCity}
            leftAccessibilityHint="Ir para a tela de pesquisar cidades"
            onPressRight={handleFavoriteCity}
            rightAccessibilityHint="Favoritar cidade">
            <CityTitle
              title={activeCity?.name}
              subtitle={activeCity?.country}
            />
          </Header>
          <WeatherCarousel
            data={cities}
            onChangeActive={handleChangeActiveCity}
          />
          <Button title="Ver detalhes da cidade" onPress={() => {}} />
        </>
      )}
    </Container>
  );
};

export default Home;
