import { ICity } from 'types';

export interface IStorageManager {
  create: (city: ICity) => void;
  update: (city: ICity) => void;
  getOne: (id: string) => ICity | void;
  getAll: () => ICity[] | void;
  deleteOne: (id: string) => void;
  setShowFlag: (isShow: boolean) => void;
  getShowFlag: () => boolean;
}
