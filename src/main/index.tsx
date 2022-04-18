import React from 'react';
import {LogBox, StatusBar} from 'react-native';

import theme from '../presentation/theme';
import {ThemeProvider} from '../presentation/theme/styled-components';

import {Router} from './routes/router';

if (__DEV__) {
  LogBox.ignoreAllLogs();
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
