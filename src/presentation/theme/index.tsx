import {DefaultTheme} from 'styled-components';
import {RFValue} from 'react-native-responsive-fontsize';

const theme: DefaultTheme = {
  fonts: {
    primary: {
      regular: 'Poppins-Regular',
      semibold: 'Poppins-SemiBold',
      bold: 'Poppins-Bold',
    },
  },

  fontSize: {
    small: RFValue(12),
    medium: RFValue(14),
    big: RFValue(16),
    large: RFValue(63),
  },

  borderRadius: {
    small: 4,
    medium: 8,
    big: 12,
  },

  padding: {
    small: 12,
    medium: 14,
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
