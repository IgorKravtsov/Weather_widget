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

  deleteOne(id: string): void {
    return localStorageManager.deleteOne(id);
  }

  create(city: ICity): void {
    return localStorageManager.create(city);
  }

  update(city: ICity): void {
    return localStorageManager.update(city);
  }
}

export const storageManager = new StorageManager();
