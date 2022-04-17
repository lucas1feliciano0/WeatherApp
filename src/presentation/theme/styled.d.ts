import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: {
        regular: string;
        semibold: string;
        bold: string;
      };
    };

    fontSize: {
      small: number;
      medium: number;
      big: number;
      large: number;
    };

    borderRadius: {
      small: number;
      medium: number;
      big: number;
    };

    padding: {
      small: number;
      medium: number;
      big: number;
    };

    colors: {
      primary: string;

      background: {
        primary: string;
        secondary: string;
        terciary: string;
        quaternary: string;
      };
      texts: {
        primary: string;
        secondary: string;
        terciary: string;
      };
    };
  }
}
