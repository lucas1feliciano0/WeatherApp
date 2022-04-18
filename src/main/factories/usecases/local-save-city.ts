import AsyncStorageRN from '@react-native-async-storage/async-storage';

import {CityModel} from './../../../domain/models/city';
import {SaveCity} from './../../../domain/usecases/save-city';
import {AsyncStorage} from './../../../infra/storage/async-storage';

const makeLocalSaveCity = (): SaveCity => {
  const storage = new AsyncStorage<CityModel[]>(AsyncStorageRN);
  const saveCity = new SaveCity(storage);

  return saveCity;
};

export {makeLocalSaveCity};
