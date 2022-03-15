import { EngineData } from '../data/engines';

export default class Engine {  
  #manufacturers;
  #for;
  #model;
  #power;
  #torque;

  constructor(data: EngineData) {
    this.#manufacturers = data.manufacturers;
    this.#for = data.for;
    this.#model = data.model;
    this.#power = data.power;
    this.#torque = data.torque;
  }

  get manufacturers() {
    return this.#manufacturers;
  }

  get for() {
    return this.#for;
  }

  get model() {
    return this.#model;
  }

  get power() {
    return {
      hp: this.#power,
      kw: Math.round(this.#power * 0.736),
    };
  }

  get torque() {
    return this.#torque;
  }

}