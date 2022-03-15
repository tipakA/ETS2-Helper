import City from './City';
import { CityData } from '../data/map';
import { CityName } from '../util/cityNames';
import Manager from './Manager';

export default class CityManager extends Manager<CityName, City> {
  public constructor() {
    super();
  }

  public makeCity(city: CityData, cache = true) {
    this.duplicateCheck(
      city.name,
      `Duplicate found for City ${city.name}.`,
    );

    const c = new City(city);
    if (cache) this.data.set(city.name, c);
    return c;
  }
}
