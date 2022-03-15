import { GarageData } from '../data/garages';

export default class Garage {
  #city;
  #level;
  #trucks;

  constructor(data: GarageData) {
    this.#city = data.city;
    this.#level = data.level;
    this.#trucks = data.trucks;
  }

  get city() {
    return this.#city;
  }

  get level() {
    return this.#level;
  }

  get trucks() {
    return this.#trucks;
  }

}