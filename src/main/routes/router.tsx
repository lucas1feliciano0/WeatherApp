import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import MakeHomeScreen from '../factories/pages/home-factory';
import MakeSearchScreen from '../factories/pages/search-factory';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
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
      </Navigator>
    </NavigationContainer>
  );
};

export {Router};
