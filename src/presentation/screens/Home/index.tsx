/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {CityModel} from '../../../domain/models/city';
import {SearchWeather} from '../../../domain/usecases/get-weather';
import {ListCity} from '../../../domain/usecases/list-city';
import {ChangeFavoriteCity} from '../../../domain/usecases/change-favorite-city';

import {RootStackParamList} from '../../../main/routes/router';

import {EmptyList} from './components/EmptyList';
import WeatherCarousel from './components/WeatherCarousel/WeatherCarousel';

import {Button, CityTitle, Container, Header, LoadingScreen} from './styles';
import {KeyNotFoundError} from '../../../domain/errors/key-not-found-error';
import {Alert} from 'react-native';

type HomeNavigation = StackNavigationProp<RootStackParamList, 'Home'>;

interface IProps {
  listCities: ListCity;
  getWeather: SearchWeather;
  favoriteCity: ChangeFavoriteCity;
}

const Home: React.FC<IProps> = ({listCities, getWeather, favoriteCity}) => {
  const navigation = useNavigation<HomeNavigation>();

  const [loading, setLoading] = useState(true);

  const [cities, setCities] = useState<CityModel[]>([]);
  const [activeCity, setActiveCity] = useState<CityModel | undefined>(
    cities[0] || undefined,
  );

  function handleChangeActiveCity(city: CityModel) {
    setActiveCity(city);
  }

  function handleNavigateToAddCity() {
    navigation.navigate('Search');
  }

  function handleNavigateToDetails() {
    const updatedCity = cities.find(
      cityUpdated => cityUpdated.id === activeCity?.id,
    );
    if (updatedCity) {
      navigation.navigate('Details', {city: updatedCity});
    }
  }

  async function handleFavoriteCity() {
    if (activeCity) {
      const result = await favoriteCity.handle(activeCity.id);

      if (result instanceof KeyNotFoundError) {
        Alert.alert('Erro ao favoritar/desfavoritar cidade');
      } else {
        loadCities();
      }
    }
  }

  function clear() {
    setCities([]);
    setActiveCity(undefined);
  }

  async function loadCities() {
    setLoading(true);
    const savedCities = await listCities.handle();
    setCities(savedCities);
    handleChangeActiveCity(savedCities[0]);
    setLoading(false);
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
        const cityCopy = {...citiesCopy[cityIndex]};

        const weatherResponse = await getWeather.handle({
          lat: cityCopy.lat,
          lon: cityCopy.lat,
        });

        citiesCopy[cityIndex] = {
          ...cityCopy,
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

  if (loading) {
    return <LoadingScreen />;
  }

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
            rightButtonIcon={activeCity?.isFavorite ? 'x' : 'heart'}
            onPressLeft={handleNavigateToAddCity}
            leftAccessibilityHint="Ir para a tela de pesquisar cidades"
            onPressRight={handleFavoriteCity}
            rightAccessibilityHint="Favoritar ou desfavoritar cidade">
            <CityTitle
              title={activeCity?.name || ''}
              subtitle={activeCity?.address}
            />
          </Header>
          <WeatherCarousel
            data={cities}
            onChangeActive={handleChangeActiveCity}
          />
          <Button
            title="Ver detalhes da cidade"
            disabled={!activeCity}
            onPress={handleNavigateToDetails}
          />
        </>
      )}
    </Container>
  );
};

export default Home;
