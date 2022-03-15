import { GarageData, GarageLevel } from '../data/garages';
import { CityName } from '../util/cityNames';
import Garage from './Garage';
import Manager from './Manager';
import { stripIndent } from 'common-tags';

export default class GarageManager extends Manager<CityName, Garage> {
  public constructor() {
    super();
  }

  public makeGarage(garage: GarageData, cache = true) {
    this.duplicateCheck(
      garage.city,
      (existing: Garage) =>
        stripIndent`    Duplicate found for Garage in ${garage.city}:
        Existing Trucks: ${existing.trucks.join(', ')}.
        Incoming Trucks: ${garage.trucks.join(', ')}.
        Existing Level: ${existing.level}.
        Incoming Level: ${garage.level}.`,
    );

    const g = new Garage(garage);
    if (cache) this.set(garage.city, g);
    return g;
  }

  public getFullGarages() {
    return this.collection.filter(garage => {
      if (garage.level === GarageLevel.Big && garage.trucks.length === 5) return true;
      if (garage.level === GarageLevel.Small && garage.trucks.length === 3) return true;
      return false;
    });
  }

  public getEmptyGarages() {
    return this.collection.filter(garage => garage.trucks.length === 0);
  }
}
