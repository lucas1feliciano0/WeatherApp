import {AsyncStorageStatic} from '@react-native-async-storage/async-storage';

import {IStorage} from '../../domain/gateways/storage';

export class AsyncStorage<T> implements IStorage {
  constructor(private readonly storage: AsyncStorageStatic) {}

  async setItem(key: string, value: T) {
    await this.storage.setItem(key, JSON.stringify(value));
  }

  async getItem(key: string): Promise<T | null> {
    const value = await this.storage.getItem(key);

    if (value !== null && value !== undefined) {
      return JSON.parse(value) as T;
    }

    return null;
  }
}
