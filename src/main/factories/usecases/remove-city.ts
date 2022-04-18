import AsyncStorageRN from '@react-native-async-storage/async-storage';

import {AsyncStorage} from '../../../infra/storage/async-storage';
import {CityModel} from '../../../domain/models/city';
import {RemoveCity} from '../../../domain/usecases/remove-city';

const makeRemoveCity = (): RemoveCity => {
  const storage = new AsyncStorage<CityModel[]>(AsyncStorageRN);
  const favoriteCity = new RemoveCity(storage);

  return favoriteCity;
};

export {makeRemoveCity};
