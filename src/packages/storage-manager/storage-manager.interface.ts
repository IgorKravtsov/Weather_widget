import { ICity } from 'types';

export interface IStorageManager {
  save: (city: ICity) => void;
  getOne: (id: string) => ICity | void;
  getAll: () => ICity[] | void;
}
