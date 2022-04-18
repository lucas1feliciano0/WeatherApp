import AsyncStorageRN from '@react-native-async-storage/async-storage';

import {CityModel} from './../../../domain/models/city';
import {ListCity} from './../../../domain/usecases/list-city';
import {AsyncStorage} from './../../../infra/storage/async-storage';

export const makeLocalListCity = (): ListCity => {
  const storage = new AsyncStorage<CityModel[]>(AsyncStorageRN);
  const listCity = new ListCity(storage);

  return listCity;
};
