/* eslint-disable sort-keys, no-inline-comments */
const Collection = require('collection');

const transmissions = new Collection([
  [ // ZF 12AS2331TD R
    'ZF 12AS2331TD R', {
      model: 'ZF 12AS2331TD R',
      retarder: true,
      gearCount: 12,
      gearRatio: [ 15.86, 1 ],
    },
  ],
  [ // PowerShift G281-12 R
    'PowerShift G281-12 R', {
      model: 'PowerShift G281-12 R',
      retarder: true,
      gearCount: 12,
      gearRatio: [ 14.93, 1 ],
    },
  ],
  [ // ZF 12TX2421TD R
    'ZF 12TX2421TD R', {
      model: 'ZF 12TX2421TD R',
      retarder: true,
      gearCount: 12,
      gearRatio: [ 16.69, 1 ],
    },
  ],
  [ // Optidriver AT2612F R
    'Optidriver AT2612F R', {
      model: 'Optidriver AT2612F R',
      retarder: true,
      gearCount: 12,
      gearRatio: [ 14.94, 1 ],
    },
  ],
]);

module.exports = transmissions;