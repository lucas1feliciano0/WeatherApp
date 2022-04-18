import React, {useState} from 'react';
import {CityModel} from '../../../domain/models/city';

import {EmptyList} from './components/EmptyList';
import WeatherCarousel from './components/WeatherCarousel/WeatherCarousel';

import {Button, CityTitle, Container, Header} from './styles';

const Home: React.FC = () => {
  // TODO: implements local storage fetch
  const cities: CityModel[] = [];

  const [activeCity, setActiveCity] = useState(cities[0] || undefined);

  function handleChangeActiveCity(index: number) {
    if (cities[index]) {
      setActiveCity(cities[index]);
    }
  }

  function handleNavigateToAddCity() {
    // TODO: handle navigation
  }

  function handleFavoriteCity() {
    // TODO: handle navigation
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
