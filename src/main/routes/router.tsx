import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import makeHomeScreen from '../factories/pages/home-factory';

const {Navigator, Screen} = createStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={makeHomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export {Router};