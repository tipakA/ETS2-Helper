import Manager from './Manager';
import { stripIndent } from 'common-tags';
import Transmission from './Transmission';
import { TransmissionData } from '../data/transmissions';
import { TransmissionModel } from '../util/interfaces';

export default class TransmissionManager extends Manager<TransmissionModel, Transmission> {
  public constructor() {
    super();
  }

  public makeTransmission(transmission: TransmissionData, cache = true) {
    this.duplicateCheck(
      transmission.model,
      (existing: Transmission) =>
        stripIndent`    Duplicate found for Transmission ${transmission.model}:
        Existing Manufacturers: ${existing.manufacturers.join(', ')}.
        Incoming Manufacturers: ${transmission.manufacturers.join(', ')}.
        Existing For: ${existing.for.join(', ')}
        Incoming For: ${transmission.for.join(', ')}`,
    );

    const t = new Transmission(transmission);
    if (cache) this.set(transmission.model, t);
    return t;
  }
}
