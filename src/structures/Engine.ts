import { EngineData } from '../data/engines';

export default class Engine {
  #manufacturers;
  #for;
  #model;
  #power;
  #torque;

  public constructor(data: EngineData) {
    this.#manufacturers = data.manufacturers;
    this.#for = data.for;
    this.#model = data.model;
    this.#power = data.power;
    this.#torque = data.torque;
  }

  public get manufacturers() {
    return this.#manufacturers;
  }

  public get for() {
    return this.#for;
  }

  public get model() {
    return this.#model;
  }

  public get power() {
    return {
      hp: this.#power,
      kw: Math.round(this.#power * 0.736),
    };
  }

  public get torque() {
    return this.#torque;
  }
}
