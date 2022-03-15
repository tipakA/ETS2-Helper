/* eslint-disable sort-keys */
import { ResolvedTruckData } from './TruckManager';

const cargoTypeMapping = {
  LTR: 'light',
  HTR: 'heavy',
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

  public constructor(data: ResolvedTruckData) {
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

  public get manufacturer() {
    return this.#manufacturer;
  }

  public get model() {
    return this.#model;
  }

  public get cabinType() {
    return this.#cabinType;
  }

  public get plate() {
    return this.#plate;
  }

  public get id() {
    return this.#id;
  }

  public get inGameID() {
    return this.#inGameID;
  }

  public get cargoType() {
    return this.#cargoType ?? cargoTypeMapping[this.#id.split('-')[1] as keyof typeof cargoTypeMapping];
  }

  public get chassis() {
    return this.#chassis;
  }

  public get interior() {
    return this.#interior;
  }

  public get color() {
    return this.#color;
  }

  public get wheelbase() {
    return this.#wheelbase;
  }

  public get fuelTank() {
    return this.#fuelTank;
  }

  public get engine() {
    return this.#engine;
  }

  public get transmission() {
    return this.#transmission;
  }

  public get wheels() {
    return this.#wheels;
  }
}
