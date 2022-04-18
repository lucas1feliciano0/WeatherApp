import React from 'react';
import {StatusBar} from 'react-native';

import theme from '../presentation/theme';
import {ThemeProvider} from '../presentation/theme/styled-components';

import {Router} from './routes/router';

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
