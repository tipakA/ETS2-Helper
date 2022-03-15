import EngineManager from './EngineManager';
import GarageManager from './GarageManager';
import MapManager from './MapManager';
import TransmissionManager from './TransmissionManager';
import TruckManager from './TruckManager';

export default class DataManager {
  #trucks = new TruckManager(this);
  #garages = new GarageManager();
  #map = new MapManager();

  #engines = new EngineManager();
  #transmissions = new TransmissionManager();

  public get trucks() {
    return this.#trucks;
  }

  public get garages() {
    return this.#garages;
  }

  public get map() {
    return this.#map;
  }

  public get engines() {
    return this.#engines;
  }

  public get transmissions() {
    return this.#transmissions;
  }

  public async init() {
    await this.#initData();
  }

  async #initData() {
    const { enginesData } = await import('../data/engines');
    const { transmissionsData } = await import('../data/transmissions');
    const { trucksData } = await import('../data/trucks');
    const { garages } = await import('../data/garages');
    const { map } = await import('../data/map');

    for (const engine of enginesData) this.#engines.makeEngine(engine);
    for (const transmission of transmissionsData) this.#transmissions.makeTransmission(transmission);
    for (const truck of trucksData) await this.#trucks.makeTruck(truck);
    for (const garage of garages) this.#garages.makeGarage(garage);
    for (const country of map) this.#map.makeCountry(country);
  }
}
