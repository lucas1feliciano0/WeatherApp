import React from 'react';

import {EmptyList} from './components/EmptyList';
import {WeatherCard} from './components/WeatherCard';

import {Button, CityTitle, Container, Header} from './styles';

const Home: React.FC = () => {
  const empty = false;

  function handleNavigateToAddCity() {
    // TODO: handle navigation
  }

  function handleFavoriteCity() {
    // TODO: handle navigation
  }

  return (
    <Container>
      {empty ? (
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
            <CityTitle title="Tangará" subtitle="Brasil" />
          </Header>
          <WeatherCard title="23" description="Chuvas leves" />
          <Button title="Ver detalhes da cidade" onPress={() => {}} />
        </>
      )}
    </Container>
  );
};

export default Home;
