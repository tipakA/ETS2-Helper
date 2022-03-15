import City from './City';
import { CityName } from '../util/cityNames';
import Collection from '@discordjs/collection';
import { CountryData } from '../data/map';

export default class Country {
  #name;
  #cities = new Collection<CityName, City>();

  public constructor(data: CountryData) {
    this.#name = data.name;
  }

  public get name() {
    return this.#name;
  }

  public get cities() {
    return this.#cities;
  }

  public setCities(data: Array<City>) {
    for (const city of data) this.#cities.set(city.name, city);
  }
}
