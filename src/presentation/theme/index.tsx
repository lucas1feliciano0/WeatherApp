import {DefaultTheme} from 'styled-components';

const theme: DefaultTheme = {
  fonts: {
    primary: {
      regular: 'Poppins-Regular',
      semibold: 'Poppins-SemiBold',
      bold: 'Poppins-Bold',
    },
  },

  borderRadius: {
    small: 4,
    medium: 8,
    big: 12,
  },

  padding: {
    small: 8,
    medium: 16,
    big: 20,
  },

  colors: {
    primary: '#4B9FF8',

    background: {
      primary: '#141543',
      secondary: '#242451',
      terciary: '#282871',
      quaternary: '#7B7DC1',
    },
    texts: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF80',
      terciary: '#FFFFFF50',
    },
  },
};

export default theme;
