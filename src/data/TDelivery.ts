/* eslint-disable sort-keys, no-inline-comments */
import { Garage, TruckID, Truck } from '../util/interfaces';
import { CityName } from '../util/types';
import { default as Collection } from '@discordjs/collection';
import { engines } from "./engines";
import { transmissions }from './transmissions';

export const garages = new Collection<CityName, Garage>([
  [
    'gdansk', {
      level: 2,
      city: 'gdansk',
      trucks: [ 'TD-LTR-01', 'TD-LTR-02', 'TD-LTR-03', 'TD-LTR-04', 'TD-LTR-05' ],
    },
  ],
  [
    'warszawa', {
      level: 1,
      city: 'warszawa',
      trucks: [ 'TD-LTR-06', 'TD-LTR-07', 'TD-LTR-08', 'TD-LTR-09', 'TD-LTR-0A' ],
    },
  ],
  [
    'poznan', {
      level: 1,
      city: 'poznan',
      trucks: ['TD-LTR-0B'],
    },
  ],
  [
    'bialystok', {
      level: 1,
      city: 'bialystok',
      trucks: [],
    },
  ],
  [
    'katowice', {
      level: 1,
      city: 'katowice',
      trucks: [],
    },
  ],
  [
    'krakow', {
      level: 1,
      city: 'krakow',
      trucks: [],
    },
  ],
  [
    'lodz', {
      level: 1,
      city: 'lodz',
      trucks: [],
    },
  ],
  [
    'lublin', {
      level: 1,
      city: 'lublin',
      trucks: [],
    },
  ],
  [
    'olsztyn', {
      level: 1,
      city: 'olsztyn',
      trucks: [],
    },
  ],
  [
    'szczecin', {
      level: 1,
      city: 'szczecin',
      trucks: [],
    },
  ],
  [
    'wroclaw', {
      level: 1,
      city: 'wroclaw',
      trucks: [],
    },
  ],
]);

export const trucks = new Collection<TruckID, Truck>([
  [ // TD-LTR-01
    'TD-LTR-01', {
      manufacturer: 'MAN',
      model: 'TGX',
      cabinType: 'XL',
      plate: 'GSP 75UH',
      id: 'TD-LTR-01',
      inGameID: 1,
      chassis: '4x2',
      interior: 'Standard',
      color: 'Sunny Yellow',
      wheelbase: 3809,
      fuelTank: 1250,
      engine: engines.get('D2676 324')!,
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R')!,
        differential: 2.71,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
  [ // TD-LTR-02
    'TD-LTR-02', {
      manufacturer: 'Iveco',
      model: 'Stralis',
      cabinType: 'Hi-Way',
      plate: 'GA 846VL',
      id: 'TD-LTR-02',
      inGameID: 2,
      chassis: '4x2',
      interior: 'Standard',
      color: 'Custom Dark Blue',
      wheelbase: 3549,
      fuelTank: 1200,
      engine: engines.get('Cursor 13 500')!,
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R')!,
        differential: 2.64,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
  [ // TD-LTR-03
    'TD-LTR-03', {
      manufacturer: 'Mercedes-Benz',
      model: 'New Actros',
      cabinType: 'GigaSpace',
      chassis: '4x2',
      id: 'TD-LTR-03',
      inGameID: 3,
      plate: 'GSP 15MV',
      interior: 'Standard',
      color: 'Magic Bordo',
      wheelbase: 3761,
      fuelTank: 1400,
      engine: engines.get('OM 471 Euro VI 350')!,
      transmission: {
        ...transmissions.get('PowerShift G281-12 R')!,
        differential: 2.73,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
  [ // TD-LTR-04
    'TD-LTR-04', {
      manufacturer: 'DAF',
      model: 'XF',
      cabinType: 'Space',
      chassis: '4x2',
      plate: 'GA 213PR',
      id: 'TD-LTR-04',
      inGameID: 4,
      interior: 'Standard Line',
      color: 'Jamaica Blue',
      wheelbase: 3780,
      fuelTank: 1400,
      engine: engines.get('MX-13 390 Euro 6, 2017')!,
      transmission: {
        ...transmissions.get('ZF 12TX2421TD R')!,
        differential: 2.64,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
  [ // TD-LTR-05
    'TD-LTR-05', {
      manufacturer: 'Renault',
      model: 'T',
      cabinType: 'High Sleeper',
      chassis: '4x2 Extra Tank',
      plate: 'GA 543EU',
      id: 'TD-LTR-05',
      inGameID: 5,
      interior: 'Exclusive Black',
      color: 'T High Sleeper',
      wheelbase: 3809,
      fuelTank: 1475,
      engine: engines.get('DTI 13 520 Euro 6')!,
      transmission: {
        ...transmissions.get('Optidriver Xtended ATO2614F R')!,
        differential: 3.40,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
  [ // TD-LTR-06
    'TD-LTR-06', {
      manufacturer: 'MAN',
      model: 'TGX',
      cabinType: 'XL',
      plate: 'WN 957MK',
      id: 'TD-LTR-06',
      inGameID: 6,
      chassis: '4x2',
      interior: 'Standard',
      color: 'Shadow Gray',
      wheelbase: 3809,
      fuelTank: 1250,
      engine: engines.get('D2676 353')!,
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R')!,
        differential: 2.71,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
  [ // TD-LTR-07
    'TD-LTR-07', {
      manufacturer: 'MAN',
      model: 'TGX',
      cabinType: 'XL',
      plate: 'WJ 964FG',
      id: 'TD-LTR-07',
      inGameID: 7,
      chassis: '4x2',
      interior: 'Standard',
      color: 'Shadow Gray',
      wheelbase: 3809,
      fuelTank: 1250,
      engine: engines.get('D2676 353')!,
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R')!,
        differential: 2.71,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
  [ // TD-LTR-08
    'TD-LTR-08', {
      manufacturer: 'MAN',
      model: 'TGX',
      cabinType: 'XL',
      plate: 'WB 2090K',
      id: 'TD-LTR-08',
      inGameID: 8,
      chassis: '4x2',
      interior: 'Standard',
      color: 'Shadow Gray',
      wheelbase: 3809,
      fuelTank: 1250,
      engine: engines.get('D2676 353')!,
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R')!,
        differential: 2.71,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
  [ // TD-LTR-09
    'TD-LTR-09', {
      manufacturer: 'MAN',
      model: 'TGX',
      cabinType: 'XL',
      plate: 'WJ 833RJ',
      id: 'TD-LTR-09',
      inGameID: 9,
      chassis: '4x2',
      interior: 'Standard',
      color: 'Shadow Gray',
      wheelbase: 3809,
      fuelTank: 1250,
      engine: engines.get('D2676 353')!,
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R')!,
        differential: 2.71,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
  [ // TD-LTR-0A
    'TD-LTR-0A', {
      manufacturer: 'MAN',
      model: 'TGX',
      cabinType: 'XL',
      plate: 'WJ 623NP',
      id: 'TD-LTR-0A',
      inGameID: 10,
      chassis: '4x2',
      interior: 'Standard',
      color: 'Shadow Gray',
      wheelbase: 3809,
      fuelTank: 1250,
      engine: engines.get('D2676 353')!,
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R')!,
        differential: 2.71,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
  [ // TD-LTR-0B
    'TD-LTR-0B', {
      manufacturer: 'Volvo',
      model: 'FH',
      cabinType: 'Globetrotter XL',
      plate: 'PO 407FM',
      id: 'TD-LTR-0B',
      inGameID: 11,
      chassis: '4x2',
      interior: 'Exclusive',
      color: 'Amber Glory Metallic',
      wheelbase: 3789,
      fuelTank: 1400,
      engine: engines.get('D13C540 Euro 5 EEV')!,
      transmission: {
        ...transmissions.get('I-Shift AT2812D R')!,
        differential: 2.64,
      },
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
    },
  ],
]);