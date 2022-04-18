import AsyncStorageRN from '@react-native-async-storage/async-storage';

import {AsyncStorage} from '../../../infra/storage/async-storage';
import {CityModel} from '../../../domain/models/city';
import {ChangeFavoriteCity} from '../../../domain/usecases/change-favorite-city';

const makeFavoriteCity = (): ChangeFavoriteCity => {
  const storage = new AsyncStorage<CityModel[]>(AsyncStorageRN);
  const favoriteCity = new ChangeFavoriteCity(storage);

  return favoriteCity;
};

export {makeFavoriteCity};
