import React, {useState} from 'react';

import {CityModel} from '../../../../../domain/models/city';
import {WeatherCard} from '../WeatherCard';

import {Container, PaginationDots, SwipeContainer} from './styles';

interface IProps {
  data: CityModel[];
  onChangeActive?: (id: number) => void;
}

const WeatherCarousel: React.FC<IProps> = ({data = [], onChangeActive}) => {
  const [activeDot, setActiveDot] = useState(0);

  function handleChangeActive(index: number) {
    setActiveDot(index);

    onChangeActive?.(index);
  }

  function renderWeatherItems({item}: {item: CityModel}) {
    if (!item.weather) {
      return;
    }
    return (
      <WeatherCard
        title={item.weather[0].temp}
        description={item.weather[0].description}
      />
    );
  }

  return (
    <Container>
      <SwipeContainer
        data={data}
        enableMomentum
        decelerationRate={0.9}
        onSnapToItem={handleChangeActive}
        renderItem={renderWeatherItems}
      />
      <PaginationDots dotsLength={data.length} activeDotIndex={activeDot} />
    </Container>
  );
};

export default WeatherCarousel;
