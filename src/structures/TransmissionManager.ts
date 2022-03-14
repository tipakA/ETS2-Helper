import { stripIndent, stripIndents } from 'common-tags'
import { TransmissionData } from '../data/transmissions';
import { TransmissionModel } from '../util/interfaces';
import Manager from './Manager';
import Transmission from './Transmission';

export default class TransmissionManager extends Manager<TransmissionModel, Transmission> {
  public constructor() {
    super();
  }

  public makeTransmission(transmission: TransmissionData, cache = true) {
    // console.log(`Making ${transmission.model}`);
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
