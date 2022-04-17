import {AsyncStorageStatic} from 'react-native';
import {AsyncStorage} from './async-storage';

import {mock} from 'jest-mock-extended';

function makeSut<T = any>() {
  const storageMock = mock<AsyncStorageStatic>();
  const asyncStorage = new AsyncStorage<T>(storageMock);

  return {storageMock, asyncStorage};
}

describe('Async storage', () => {
  it('should call insert item function', () => {
    const {storageMock, asyncStorage} = makeSut<number>();
    const value = 10;

    const spy = jest.spyOn(storageMock, 'setItem');
    asyncStorage.setItem('test', value);
    expect(spy).toBeCalled();
  });

  it('should convert value to string before save', () => {
    const {storageMock, asyncStorage} = makeSut();
    const value = 10;
    const key = 'test';

    const spy = jest.spyOn(storageMock, 'setItem');
    asyncStorage.setItem(key, value);
    expect(spy).toBeCalledWith(key, value.toString());
  });

  it('should call get item function', () => {
    const {storageMock, asyncStorage} = makeSut();
    const key = 'key-test';

    storageMock.getItem.mockReturnValueOnce(
      new Promise(resolve => resolve('key-value')),
    );

    const spy = jest.spyOn(storageMock, 'getItem');
    asyncStorage.getItem(key);

    expect(spy).toBeCalledWith(key);
  });

  it('should return item', async () => {
    const {storageMock, asyncStorage} = makeSut<string>();
    const key = 'key-test';
    const value = 'keyvalue';

    storageMock.getItem.mockReturnValueOnce(
      new Promise(resolve => resolve(JSON.stringify(value))),
    );

    const itemResult = await asyncStorage.getItem(key);
    expect(itemResult).toBe(value);
  });

  it('should return null if key not found', async () => {
    const {asyncStorage} = makeSut<string>();
    const key = 'key-test';

    const itemResult = await asyncStorage.getItem(key);
    expect(itemResult).toBe(null);
  });
});
