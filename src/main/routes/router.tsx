import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import MakeHomeScreen from '../factories/pages/home-factory';

const {Navigator, Screen} = createStackNavigator();

const Router: React.FC = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name="Home" component={MakeHomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export {Router};
