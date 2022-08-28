import { IStorageManager } from './storage-manager.interface';
import { ICity } from 'types';

enum LocalstorageKey {
  cities = 'weather_cities',
  showFlag = 'weather_show_flag',
}

export class LocalStorageManager implements IStorageManager {
  setShowFlag(isShow: boolean) {
    localStorage.setItem(LocalstorageKey.showFlag, JSON.stringify(isShow));
  }

  getShowFlag(): boolean {
    const isShow = localStorage.getItem(LocalstorageKey.showFlag);
    return JSON.parse(isShow || 'true');
  }

  getAll() {
    const localStorageCities = localStorage.getItem(LocalstorageKey.cities);
    const cities: ICity[] = JSON.parse(localStorageCities || '[]');
    return cities;
  }

  getOne(id: string) {
    const cities = this.getAll();
    return cities?.find((c) => c.id === id);
  }

  create(city: ICity): void {
    const cities = this.getAll();
    const existedCity = cities.find((c) => c.name === city.name);
    if (existedCity) {
      throw Error(`City with name ${existedCity.name} already exists`);
    }
    cities.push(city);
    localStorage.setItem(LocalstorageKey.cities, JSON.stringify(cities));
  }

  update(city: ICity): void {
    const cities = this.getAll();
    const existedCity = cities.find((c) => c.id === city.id);
    if (!existedCity) {
      throw Error(`City with name ${city.name} doesn't exists`);
    }

    Object.assign(existedCity, city);
    localStorage.setItem(LocalstorageKey.cities, JSON.stringify(cities));
  }

  deleteOne(id: string): void {
    const cities = this.getAll().filter((c) => c.id !== id);
    localStorage.setItem(LocalstorageKey.cities, JSON.stringify(cities));
  }
}
