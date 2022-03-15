import { CityData, CountryData } from '../data/map';
import CityManager from './CityManager';
import CountryManager from './CountryManager';

export default class MapManager {
  #cities = new CityManager();
  #countries = new CountryManager(this);

  public get cities() {
    return this.#cities;
  }

  public get countries() {
    return this.#countries;
  }

  public makeCity(data: CityData) {
    return this.#cities.makeCity(data);
  }

  public makeCountry(data: CountryData) {
    return this.#countries.makeCountry(data);
  }
}