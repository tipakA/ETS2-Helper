import { GarageData } from '../data/garages';

export default class Garage {
  #city;
  #level;
  #trucks;

  public constructor(data: GarageData) {
    this.#city = data.city;
    this.#level = data.level;
    this.#trucks = data.trucks;
  }

  public get city() {
    return this.#city;
  }

  public get level() {
    return this.#level;
  }

  public get trucks() {
    return this.#trucks;
  }
}
