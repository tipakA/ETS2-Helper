/* eslint-disable sort-keys, no-inline-comments */
import { default as Collection } from "@discordjs/collection";
import { EnginePowers, Engine, EngineModel } from '../util/interfaces';

function power(hp: number): EnginePowers {
  return {
    hp,
    kw: Math.round(hp * 0.736),
  };
}

const engines = new Collection<EngineModel, Engine>([
  [ // D2676 324
    'D2676 324', {
      manufacturers: ['MAN'],
      for: ['TGX'],
      model: 'D2676 324',
      power: power(440),
      torque: {
        nm: [2100],
        at: [ 1000, 1400 ],
      },
    },
  ],
  [ // D2676 353
    'D2676 353', {
      manufacturers: ['MAN'],
      for: ['TGX'],
      model: 'D2676 353',
      power: power(480),
      torque: {
        nm: [2300],
        at: [ 1000, 1400 ],
      },
    },
  ],
  [ // Cursor 13 500
    'Cursor 13 500', {
      manufacturers: ['Iveco'],
      for: ['Stralis'],
      model: 'Cursor 13 500',
      power: power(500),
      torque: {
        nm: [2300],
        at: [ 1000, 1500 ],
      },
    },
  ],
  [ // OM 471 Euro VI 350
    'OM 471 Euro VI 350', {
      manufacturers: ['Mercedes-Benz'],
      for: ['New Actros'],
      model: 'OM 471 Euro VI',
      power: power(476),
      torque: {
        nm: [2300],
        at: [1100],
      },
    },
  ],
  [ // MX-11 320 Euro 6
    'MX-11 320 Euro 6', {
      manufacturers: ['DAF'],
      for: ['XF'],
      model: 'MX-11 320 Euro 6',
      power: power(435),
      torque: {
        nm: [2100],
        at: [ 1000, 1450 ],
      },
    },
  ],
  [ // MX-13 390 Euro 6, 2017
    'MX-13 390 Euro 6, 2017', {
      manufacturers: ['DAF'],
      for: ['XF'],
      model: 'MX-13 390 Euro 6, 2017',
      power: power(530),
      torque: {
        nm: [ 2500, 2600 ],
        at: [ 1000, 1425 ],
      },
    },
  ],
  [ // DTI 13 520 Euro 6
    'DTI 13 520 Euro 6', {
      manufacturers: ['Renault'],
      for: ['T'],
      model: 'DTI 13 520 Euro 6',
      power: power(520),
      torque: {
        nm: [2550],
        at: [ 1100, 1430 ],
      },
    },
  ],
  [ // D13C540 Euro 5 EEV
    'D13C540 Euro 5 EEV', {
      manufacturers: ['Volvo'],
      for: ['FX'],
      model: 'D13C540 Euro 5 EEV',
      power: power(540),
      torque: {
        nm: [2600],
        at: [ 1050, 1450 ],
      },
    },
  ],
]);

module.exports = engines;