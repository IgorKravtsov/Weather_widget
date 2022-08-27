import { LocalStorageManager } from './localStorage.manager';
import { IStorageManager } from './storage-manager.interface';
import { ICity } from 'types';

const localStorageManager = new LocalStorageManager();

class StorageManager implements IStorageManager {
  getAll(): ICity[] | void {
    return localStorageManager.getAll();
  }

  getOne(id: string): ICity | void {
    return localStorageManager.getOne(id);
  }

  save(city: ICity): void {
    localStorageManager.save(city);
  }
}

export const storageManager = new StorageManager();
