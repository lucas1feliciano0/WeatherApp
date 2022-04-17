import AsyncStorageRN from '@react-native-async-storage/async-storage';

import {IStorage} from '../../domain/gateways/storage';

export class AsyncStorage<T> implements IStorage {
  async setItem(key: string, value: T) {
    await AsyncStorageRN.setItem(key, JSON.stringify(value));
  }

  async getItem(key: string): Promise<T | null> {
    const value = await AsyncStorageRN.getItem(key);
    if (value !== null) {
      return JSON.parse(value) as T;
    }

    return null;
  }
}
