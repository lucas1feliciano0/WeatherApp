import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';

import {CityModel} from '../../../../../domain/models/city';
import {WeatherCard} from '../../../../components/WeatherCard';

import {
  Column,
  Container,
  Icon,
  PaginationDots,
  SwipeContainer,
  Touchable,
} from './styles';

interface IProps {
  data: CityModel[];
  onChangeActive?: (city: CityModel) => void;
}

const WeatherCarousel: React.FC<IProps> = ({data = [], onChangeActive}) => {
  const [activeDot, setActiveDot] = useState(0);

  const canGoNext = activeDot + 1 < data.length;
  const canGoPrev = activeDot - 1 >= 0;

  const swipeRef = useRef<Carousel<JSX.Element> | null>(null);

  function handlePressNextCity() {
    if (canGoNext) {
      swipeRef?.current?.snapToNext();
    }
  }

  function handlePressPrevCity() {
    if (canGoPrev) {
      swipeRef?.current?.snapToPrev();
    }
  }

  function handleChangeActive(index: number) {
    setActiveDot(index);

    onChangeActive?.(data[index]);
  }

  function renderWeatherItems({item}: {item: CityModel}) {
    if (!item.weather) {
      return;
    }

    return (
      <WeatherCard
        title={item.weather[0].temp}
        weather={item.weather[0].category}
        description={item.weather[0].description}
      />
    );
  }

  return (
    <Container>
      <Touchable disabled={!canGoPrev} onPress={handlePressPrevCity}>
        <Icon name="chevron-left" />
      </Touchable>
      <Column>
        <SwipeContainer
          data={data}
          ref={swipeRef}
          enableMomentum
          decelerationRate={0.9}
          onSnapToItem={handleChangeActive}
          renderItem={renderWeatherItems}
        />
        <PaginationDots dotsLength={data.length} activeDotIndex={activeDot} />
      </Column>
      <Touchable disabled={!canGoNext} onPress={handlePressNextCity}>
        <Icon name="chevron-right" />
      </Touchable>
    </Container>
  );
};

export default WeatherCarousel;
