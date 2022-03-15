import DataManager from './DataManager';
import Engine from './Engine';
import Manager from './Manager';
import { stripIndent } from 'common-tags';
import Transmission from './Transmission';
import Truck from './Truck';
import { TruckData } from '../data/trucks';
import { TruckID } from '../util/interfaces';

export interface ResolvedTruckData extends Omit<TruckData, 'engine' | 'transmission'> {
  engine: Engine;
  transmission: Transmission;
}

export default class TruckManager extends Manager<TruckID, Truck> {
  #dataManager;

  public constructor(dataManager: DataManager) {
    super();
    this.#dataManager = dataManager;
  }

  public async makeTruck(truck: TruckData, cache = true) {
    this.duplicateCheck(
      truck.id,
      `Duplicate found for Truck '${truck.id}'.`,
    );

    const { transmissionsData } = await import('../data/transmissions');
    const transData = transmissionsData.find(tr => tr.model === truck.transmission.model);
    if (!transData) {
      throw stripIndent`    Missing transmission: ${truck.transmission.model}
      Truck ID: ${truck.id}.`;
    }
    const truckTransmission = new Transmission(transData).setDifferential(truck.transmission.differential);

    const data: ResolvedTruckData = {
      ...truck,
      engine: this.#dataManager.engines.collection.get(truck.engine)!,
      transmission: truckTransmission,
    };

    const t = new Truck(data);
    if (cache) this.set(truck.id, t);
    return t;
  }

  public getTruckGarage(truck: Truck | TruckID) {
    const id = truck instanceof Truck ? truck.id : truck;
    return this.#dataManager.garages.collection.find(garage => garage.trucks.includes(id));
  }
}
