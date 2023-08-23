/* eslint-disable sort-keys, no-inline-comments, capitalized-comments */
import { CityName } from '../util/cityNames';
import { TruckID } from '../util/interfaces';

/* eslint-disable no-shadow, no-unused-vars */
export enum GarageLevel {
  Small,
  Big,
}
/* eslint-enable no-shadow, no-unused-vars */

export interface GarageData {
  level: GarageLevel;
  city: CityName;
  trucks: Array<TruckID>;
}

export const garages: Array<GarageData> = [
  { // gdansk
    level: GarageLevel.Big,
    city: 'gdansk',
    trucks: [ 'TD-LTR-01', 'TD-LTR-02', 'TD-LTR-03', 'TD-LTR-04', 'TD-LTR-05' ],
  },
  { // warszawa
    level: GarageLevel.Big,
    city: 'warszawa',
    trucks: [ 'TD-LTR-06', 'TD-LTR-07', 'TD-LTR-08', 'TD-LTR-09', 'TD-LTR-0A' ],
  },
  { // poznan
    level: GarageLevel.Small,
    city: 'poznan',
    trucks: [ 'TD-LTR-0B', 'TD-HTR-01' ],
  },
  { // bialystok
    level: GarageLevel.Big,
    city: 'bialystok',
    trucks: [],
  },
  { // katowice
    level: GarageLevel.Big,
    city: 'katowice',
    trucks: [],
  },
  { // krakow
    level: GarageLevel.Big,
    city: 'krakow',
    trucks: [],
  },
  { // lodz
    level: GarageLevel.Small,
    city: 'lodz',
    trucks: [],
  },
  { // lublin
    level: GarageLevel.Big,
    city: 'lublin',
    trucks: [ 'TD-LTR-16', 'TD-LTR-17', 'TD-LTR-18', 'TD-LTR-19', 'TD-LTR-1A' ],
  },
  { // olsztyn
    level: GarageLevel.Big,
    city: 'olsztyn',
    trucks: [],
  },
  { // szczecin
    level: GarageLevel.Big,
    city: 'szczecin',
    trucks: [ 'TD-LTR-11', 'TD-LTR-12', 'TD-LTR-13', 'TD-LTR-14', 'TD-LTR-15' ],
  },
  { // wroclaw
    level: GarageLevel.Big,
    city: 'wroclaw',
    trucks: [ 'TD-LTR-0C', 'TD-LTR-0D', 'TD-LTR-0E', 'TD-LTR-0F', 'TD-LTR-10' ],
  },
];
