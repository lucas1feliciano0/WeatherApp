import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

import {CityExistsError} from '../../../domain/errors/city-exists-error';

import {CityModel} from '../../../domain/models/city';
import {SaveCity} from '../../../domain/usecases/save-city';
import {SearchCity} from '../../../domain/usecases/search-city';

import {Container, CitySearchItem, Header, Input, List} from './styles';

interface IProps {
  searchCity: SearchCity;
  saveCity: SaveCity;
}

const Search: React.FC<IProps> = ({searchCity, saveCity}) => {
  const navigation = useNavigation();

  const [searchValue, setSearchValue] = useState('');
  const [cities, setCities] = useState<CityModel[]>([]);

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSaveCity(city: CityModel) {
    const result = await saveCity.handle(city);
    if (result instanceof CityExistsError) {
      Alert.alert('A cidade já foi adicionada');
    } else {
      handleGoBack();
    }
  }

  async function handleSubmitSearch() {
    const response = await searchCity.handle({name: searchValue});
    setCities(response);
  }

  function renderCitySearchItems({item}: {item: CityModel}) {
    return (
      <CitySearchItem
        id={item.id}
        title={item.name}
        lat={item.lat}
        lon={item.lon}
        subtitle={item.address}
        addButtonAccessibilityHint="Clique aqui para adicionar a cidade"
        onPressAdd={handleSaveCity}
      />
    );
  }

  return (
    <Container>
      <Header
        onPressLeft={handleGoBack}
        leftButtonIcon="arrow-left"
        rightButtonIcon="search"
        onPressRight={handleSubmitSearch}
        rightDisabled={!searchValue}>
        <Input
          placeholder="Insira o nome da cidade"
          onChangeText={setSearchValue}
        />
      </Header>
      <List<React.ElementType>
        data={cities}
        renderItem={renderCitySearchItems}
      />
    </Container>
  );
};

export default Search;
