import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {CityModel} from '../../domain/models/city';

import MakeHomeScreen from '../factories/pages/home-factory';
import MakeSearchScreen from '../factories/pages/search-factory';
import MakeDetailsScreen from '../factories/pages/details-factory';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Details: {
    city: CityModel;
  };
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const Router: React.FC = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name="Home" component={MakeHomeScreen} />
        <Screen name="Search" component={MakeSearchScreen} />
        <Screen name="Details" component={MakeDetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export {Router};
