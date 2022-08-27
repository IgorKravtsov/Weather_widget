import { IStorageManager } from './storage-manager.interface';
import { ICity } from 'types';

enum LocalstorageKey {
  cities = 'weather_cities',
}

export class LocalStorageManager implements IStorageManager {
  getAll() {
    const localStorageCities = localStorage.getItem(LocalstorageKey.cities);
    const cities: ICity[] = JSON.parse(localStorageCities || '[]');
    return cities;
  }

  getOne(id: string) {
    const cities = this.getAll();
    return cities?.find((c) => c.id === id);
  }

  save(city: ICity): void {
    const cities = this.getAll();
    const existedCity = cities.find((c) => c.name === city.name);
    if (existedCity) {
      throw Error(`City with name ${existedCity.name} already exists`);
    }
    cities.push(city);
    localStorage.setItem(LocalstorageKey.cities, JSON.stringify(cities));
  }
}
