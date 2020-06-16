/* eslint-disable sort-keys, no-inline-comments */
import { default as Collection } from "@discordjs/collection";
import { TransmissionModel, Transmission } from '../util/interfaces';

const transmissions = new Collection<TransmissionModel, Transmission>([
  [ // ZF 12AS2331TD R
    'ZF 12AS2331TD R', {
      manufacturers: [ 'DAF', 'Iveco', 'MAN' ],
      for: [ 'XF105', 'XF', 'Stralis', 'TGX' ],
      model: 'ZF 12AS2331TD R',
      retarder: true,
      gearCount: 12,
      gearRatio: [ 15.86, 1 ],
    },
  ],
  [ // PowerShift G281-12 R
    'PowerShift G281-12 R', {
      manufacturers: ['Mercedes-Benz'],
      for: [ 'Actros', 'New Actros' ],
      model: 'PowerShift G281-12 R',
      retarder: true,
      gearCount: 12,
      gearRatio: [ 14.93, 1 ],
    },
  ],
  [ // ZF 12TX2421TD R
    'ZF 12TX2421TD R', {
      manufacturers: ['MAN'],
      for: ['XF'],
      model: 'ZF 12TX2421TD R',
      retarder: true,
      gearCount: 12,
      gearRatio: [ 16.69, 1 ],
    },
  ],
  [ // Optidriver AT2612F R
    'Optidriver AT2612F R', {
      manufacturers: ['Renault'],
      for: ['T'],
      model: 'Optidriver AT2612F R',
      retarder: true,
      gearCount: 12,
      gearRatio: [ 14.94, 1 ],
    },
  ],
  [ // Optidriver Xtended ATO2612F R
    'Optidriver Xtended ATO2614F R', {
      manufacturers: ['Renault'],
      for: ['T'],
      model: 'Optidriver Xtended ATO2614F R',
      retarder: true,
      gearCount: 14,
      gearRatio: [ 32.04, 0.79 ],
    },
  ],
  [ // I-Shift AT2812D R
    'I-Shift AT2812D R', {
      manufacturers: ['Volvo'],
      for: ['FX'],
      model: 'I-Shift AT2812D R',
      retarder: true,
      gearCount: 12,
      gearRatio: [ 14.94, 1 ],
    }
  ]
]);

module.exports = transmissions;