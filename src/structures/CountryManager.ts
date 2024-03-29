/* eslint-disable no-dupe-class-members */
import Country from './Country';
import { CountryData } from '../data/map';
import { CountryName } from '../util/types';
import Manager from './Manager';
import MapManager from './MapManager';

export default class CountryManager extends Manager<CountryName, Country> {
  #mapManager;

  public constructor(mapManager: MapManager) {
    super();
    this.#mapManager = mapManager;
  }

  public makeCountry(country: CountryData, cache = true) {
    this.duplicateCheck(
      country.name,
      `Duplicate found for Country ${country.name}.`,
    );

    const cnt = new Country(country);

    for (const city of country.cities) {
      const ct = this.#mapManager.makeCity(city);
      cnt.setCities([ct]);
    }

    if (cache) this.data.set(country.name, cnt);
    return cnt;
  }
}
