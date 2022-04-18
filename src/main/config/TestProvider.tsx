import React from 'react';

import {ThemeProvider} from '../../presentation/theme/styled-components';
import theme from '../../presentation/theme/index';

const Provider: React.FC = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export {Provider};
