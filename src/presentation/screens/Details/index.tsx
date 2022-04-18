import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {RootStackParamList} from '../../../main/routes/router';

import {
  CityTitle,
  Container,
  Header,
  InfoContainer,
  InfoList,
  WeatherCard,
  WeatherDayCard,
  WeatherList,
  InfoCard,
} from './styles';
import {RemoveCity} from '../../../domain/usecases/remove-city';

type DetailsRouteParams = RouteProp<RootStackParamList, 'Details'>;

interface IProps {
  removeCity: RemoveCity;
}

const Details: React.FC<IProps> = ({removeCity}) => {
  const navigation = useNavigation();
  const {city} = useRoute<DetailsRouteParams>()?.params || {};

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleRemoveCity() {
    await removeCity.handle(city.id);
    handleGoBack();
  }

  function renderWeatherDays() {
    const WeatherDays = city.weather?.map(weatherDay => (
      <WeatherDayCard day="18/04" value={weatherDay.temp} />
    ));

    return <WeatherList>{WeatherDays}</WeatherList>;
  }

  if (!city?.weather) {
    return null;
  }

  const todayWeather = city.weather[0];

  return (
    <Container>
      <Header
        rightButtonIcon="trash"
        leftButtonIcon="arrow-left"
        onPressLeft={handleGoBack}
        leftAccessibilityHint="Voltar para página inicial"
        onPressRight={handleRemoveCity}
        rightAccessibilityHint="Remover cidade">
        <CityTitle title={city?.name} subtitle={city?.country} />
      </Header>
      <WeatherCard
        title={todayWeather.temp}
        description={todayWeather.description}
      />
      <InfoContainer>
        {renderWeatherDays()}
        <InfoList>
          <InfoCard
            label="T. máx"
            iconName="trending-up"
            value={`${todayWeather.maxTemperature || 0} º`}
          />
          <InfoCard
            label="T. mín"
            iconName="trending-down"
            value={`${todayWeather.minTemperature} º`}
          />
          <InfoCard
            label="Umidade"
            iconName="droplet"
            value={todayWeather.humidity}
          />
          <InfoCard
            label="Sensação"
            iconName="thermometer"
            value={todayWeather.feelsLike}
          />
        </InfoList>
      </InfoContainer>
    </Container>
  );
};

export default Details;
