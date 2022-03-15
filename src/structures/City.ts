import { CityData } from '../data/map';

export default class City {
  #name;
  #dealer;
  #discovered;
  #garage;
  #laborExchange;
  #whole;

  constructor(data: CityData) {
    this.#name = data.name;
    this.#dealer = data.dealer;
    this.#discovered = data.discovered;
    this.#garage = data.garage;
    this.#laborExchange = data.laborExchange;
    this.#whole = data.whole;
  }

  public get name() {
    return this.#name;
  }

  public get dealer() {
    return this.#dealer;
  }

  public get discovered() {
    return this.#discovered;
  }

  public get garage() {
    return this.#garage
  }

  public get laborExchange() {
    return this.#laborExchange;
  }

  public get whole() {
    return this.#whole;
  }
}