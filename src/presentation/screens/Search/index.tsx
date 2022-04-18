import React, {useState} from 'react';
import {CityModel} from '../../../domain/models/city';

import {Container, CitySearchItem, Header, Input, List} from './styles';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  // TODO: implement fetch cities
  const cities: CityModel[] = [];

  function handleGoBack() {
    // TODO: implement go back
  }

  function handleSubmitSearch() {
    // TODO: implement search with value
  }

  function renderCitySearchItems({item}: {item: CityModel}) {
    return (
      <CitySearchItem
        id={item.id}
        title={item.name}
        subtitle={item.country}
        addButtonAccessibilityHint="Clique aqui para adicionar a cidade"
        onPressAdd={console.log}
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
