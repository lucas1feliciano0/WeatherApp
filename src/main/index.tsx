import React from 'react';
import {StatusBar} from 'react-native';

import Home from '../presentation/screens/Home';

import theme from '../presentation/theme';
import {ThemeProvider} from '../presentation/theme/styled-components';

const main: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.background.primary}
        barStyle="light-content"
      />
      <Home />
    </ThemeProvider>
  );
};

export default main;
