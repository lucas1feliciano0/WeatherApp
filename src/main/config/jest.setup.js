require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
