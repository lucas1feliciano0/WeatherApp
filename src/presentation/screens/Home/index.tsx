/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

import {CityModel} from '../../../domain/models/city';
import {SearchWeather} from '../../../domain/usecases/get-weather';
import {ListCity} from '../../../domain/usecases/list-city';

import {EmptyList} from './components/EmptyList';
import WeatherCarousel from './components/WeatherCarousel/WeatherCarousel';

import {Button, CityTitle, Container, Header} from './styles';

interface IProps {
  listCities: ListCity;
  getWeather: SearchWeather;
}

const Home: React.FC<IProps> = ({listCities, getWeather}) => {
  const [cities, setCities] = useState<CityModel[]>([]);
  const [activeCity, setActiveCity] = useState(cities[0] || undefined);

  async function setActiveCityWeather(id: number) {
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

  function handleChangeActiveCity(city: CityModel) {
    setActiveCity(city);
    setActiveCityWeather(city.id);
  }

  function handleNavigateToAddCity() {
    // TODO: handle navigation
  }

  function handleFavoriteCity() {
    // TODO: handle navigation
  }

  useEffect(() => {
    async function loadCities() {
      const savedCities = await listCities.handle();
      setCities(savedCities);
      handleChangeActiveCity(savedCities[0]);
    }

    loadCities();
  }, [listCities]);

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
