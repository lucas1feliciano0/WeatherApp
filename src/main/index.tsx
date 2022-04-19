import React from 'react';
import {LogBox, StatusBar} from 'react-native';

import theme from '../presentation/theme';
import {ThemeProvider} from '../presentation/theme/styled-components';

import {Router} from './routes/router';

if (__DEV__) {
  //  ignore react-native-snap-carousel deprecated logs
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);
}

const main: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.background.primary}
        barStyle="light-content"
      />
      <Router />
    </ThemeProvider>
  );
};

export default main;
