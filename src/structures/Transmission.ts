import { TransmissionData } from '../data/transmissions';
import { TransmissionModel } from '../util/interfaces';

export default class Transmission {
  #manufacturers;
  #for;
  #model;
  #retarder;
  #gearCount;
  #subgears;
  #gearRatio;
  #torqueMod;
  #differential: number | null = null;

  public constructor(data: TransmissionData) {
    this.#manufacturers = data.manufacturers;
    this.#for = data.for;
    this.#model = data.model;
    this.#retarder = data.retarder ?? null;
    this.#gearCount = data.gearCount ?? null;
    this.#subgears = data.subgears ?? null;
    this.#gearRatio = data.gearRatio;
    this.#torqueMod = data.torqueMod ?? null;

    this.#parseModel();
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

  public get retarder() {
    return this.#retarder ?? false;
  }

  public get gearCount() {
    if (!this.#gearCount) throw 'No gear count set.';
    return this.#gearCount;
  }

  public get subgears() {
    return this.#subgears;
  }

  public get gearRatio() {
    return this.#gearRatio;
  }

  public get torqueMod() {
    return this.#torqueMod;
  }

  public get differential() {
    if (!this.#differential) throw 'No differential set.';
    return this.#differential;
  }

  public setDifferential(differential: number) {
    if (this.#differential === null) this.#differential = differential;
    else throw 'Differential already set.';
    return this;
  }

  #parseModel() {
    const regex = /(ZF (?<gears1>\d{2})(TX|AS)\d{4}T[OD] ?(?<retarder1>R)?|TipMatic (?<gears2>\d{2})AS\d{4} [OD]D ?(?<retarder2>R)?|PowerShift G\d{3}-(?<gears3>\d{2}) ?(?<retarder3>R)?|Optidriver (Xtended |)ATO?\d{2}(?<gears4>\d{2})[DF] ?(?<retarder4>R)?|Opticruise GRSO? \d{3}(?<retarder5>R)?|I-Shift ATO?\d{2}(?<gears6>\d{2})[DF] ?(?<retarder6>R)?(?<subgears6> ?\+ ASO-ULC)?|Scania GA867 ?(?<retarder7>R)?|Allison 4500 ?(?<retarder8>R)?)/;
    const staticGears: {[key: TransmissionModel]: Readonly<6 | 12>} = {
      'Allison 4500': 6,
      'Scania GA867': 6,
    };

    const match = this.#model.match(regex);
    if (!match) throw `No match for model '${this.#model}'`;

    const matches = Object.entries(match.groups!).filter(ent => ent[1]);
    const _retarder = matches.filter(ent => ent[0].includes('retarder'))[0] ?? false;
    const _subgears = matches.filter(ent => ent[0].includes('subgears'))[0] ?? false;
    const _gears = matches.filter(ent => ent[0].includes('gears'))[0] ?? false;

    // _retarder = [string, 'R'] || [string, ' R'] || false

    const retarder = this.#retarder ? this.#retarder
      : _retarder?.[1] ? true : false; // eslint-disable-line no-unneeded-ternary

    let subgears = this.#subgears ? this.#subgears
      : _subgears?.[1] ? 2 : null;

    let gears = this.#gearCount ? this.#gearCount
      : _gears?.[1] ? parseInt(_gears?.[1])
        : 'UNPARSED';
    if (gears === 'UNPARSED') {
      if (this.#model.includes('Opticruise')) gears = 12;
      else {
        const key = this.#retarder ? this.#model.slice(0, -1).trim() : this.#model;
        gears = staticGears[key];
      }
    }
    if (gears === 14) {
      gears = 12;
      subgears = 2;
    }

    this.#retarder = retarder ? retarder : null;
    this.#subgears = subgears;
    this.#gearCount = gears as 6 | 12 | 16;
  }
}
