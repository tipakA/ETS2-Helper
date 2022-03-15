import { CityData } from '../data/map';
import { CityName } from '../util/cityNames';
import City from './City';
import Manager from './Manager';

export default class CityManager extends Manager<CityName, City> {
  constructor() {
    super();
  }

  public makeCity(city: CityData, cache = true) {
    this.duplicateCheck(
      city.name,
      `Duplicate found for City ${city.name}.`,
    );

    const c = new City(city);
    if (cache) this.set(city.name, c);
    return c;
  }
}