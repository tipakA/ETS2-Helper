import { ResolvedTruckData } from './TruckManager';

const cargoTypeMapping = {
  LTR: 'light',
  HTR: 'heavy'
} as const;

export default class Truck {
  #manufacturer;
  #model;
  #cabinType;
  #plate;
  #id;
  #inGameID;
  #cargoType;
  #chassis;
  #interior;
  #color;
  #wheelbase;
  #fuelTank;
  #engine;
  #transmission;
  #wheels;

  constructor(data: ResolvedTruckData) {
    this.#manufacturer = data.manufacturer;
    this.#model = data.model;
    this.#cabinType = data.cabinType;
    this.#plate = data.plate;
    this.#id = data.id;
    this.#inGameID = data.inGameID;
    this.#cargoType = data.cargoType ?? null;
    this.#chassis = data.chassis;
    this.#interior = data.interior;
    this.#color = data.color;
    this.#wheelbase = data.wheelbase;
    this.#fuelTank = data.fuelTank;
    this.#engine = data.engine;
    this.#transmission = data.transmission;
    this.#wheels = data.wheels;
  }

  get manufacturer() {
    return this.#manufacturer;
  }

  get model() {
    return this.#model;
  }

  get cabinType() {
    return this.#cabinType;
  }

  get plate() {
    return this.#plate;
  }

  get id() {
    return this.#id;
  }

  get inGameID() {
    return this.#inGameID;
  }

  get cargoType() {
    return this.#cargoType ?? cargoTypeMapping[this.#id.split('-')[1] as 'LTR' | 'HTR'];
  }

  get chassis() {
    return this.#chassis;
  }

  get interior() {
    return this.#interior;
  }

  get color() {
    return this.#color;
  }

  get wheelbase() {
    return this.#wheelbase;
  }

  get fuelTank() {
    return this.#fuelTank;
  }

  get engine() {
    return this.#engine;
  }

  get transmission() {
    return this.#transmission;
  }

  get wheels() {
    return this.#wheels;
  }
}