import React, {useState} from 'react';

import {CityModel} from '../../../domain/models/city';
import {SaveCity} from '../../../domain/usecases/save-city';
import {SearchCity} from '../../../domain/usecases/search-city';

import {Container, CitySearchItem, Header, Input, List} from './styles';

interface IProps {
  searchCity: SearchCity;
  saveCity: SaveCity;
}

const Search: React.FC<IProps> = ({searchCity, saveCity}) => {
  const [searchValue, setSearchValue] = useState('');
  const [cities, setCities] = useState<CityModel[]>([]);

  function handleGoBack() {
    // TODO: implement go back
  }

  async function handleSaveCity(city: CityModel) {
    saveCity.handle(city);
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
        subtitle={item.country}
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
        onPressRight={handleSubmitSearch}>
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
