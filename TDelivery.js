/* eslint-disable sort-keys, no-inline-comments */
const Collection = require('collection');

function power(hp) {
  const powers = {};
  powers.hp = hp;
  powers.kw = Math.round(hp * 0.736);
  return powers;
}

const engines = new Collection([
  [ // D2676 324
    'D2676 324', {
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
      model: 'Cursor 13 500',
      power: power(500),
      torque: {
        nm: [2300],
        at: [ 1000, 1500 ],
      },
    },
  ],
  [ // OM 471 Euro VI
    'OM 471 Euro VI', {
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
      model: 'DTI 13 520 Euro 6',
      power: power(520),
      torque: {
        nm: [2550],
        at: [ 1100, 1430 ],
      },
    },
  ],
]);

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

const trucks = new Collection([
  [ // TD-LTR-01
    'TD-LTR-01', {
      manufacturer: 'MAN',
      model: 'TGX',
      cabinType: 'XL',
      plate: 'GSP 75UH',
      chassis: '4x2',
      interior: 'Standard',
      color: 'Sunny Yellow',
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
      wheelbase: 3809,
      fuelTank: 1250,
      engine: engines.get('D2676 324'),
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R'),
        differential: 2.71,
      },
    },
  ],
  [ // TD-LTR-02
    'TD-LTR-02', {
      manufacturer: 'Iveco',
      model: 'Stralis',
      cabinType: 'Hi-Way',
      plate: 'GA 846VL',
      chassis: '4x2',
      interior: 'Standard',
      color: 'Custom Dark Blue',
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
      wheelbase: 3549,
      fuelTank: 1200,
      engine: engines.get('Cursor 13 500'),
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R'),
        differential: 2.64,
      },
    },
  ],
  [ // TD-LTR-03
    'TD-LTR-03', {
      manufacturer: 'Mercedes-Benz',
      model: 'New Actros',
      cabinType: 'GigaSpace',
      chassis: '4x2',
      plate: 'GSP 15MV',
      interior: 'Standard',
      color: 'Magic Bordo',
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
      wheelbase: 3761,
      fuelTank: 1400,
      engine: engines.get('OM 471 Euro VI'),
      transmission: {
        ...transmissions.get('PowerShift G281-12 R'),
        differential: 2.73,
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
      interior: 'Standard Line',
      color: 'Jamaica Blue',
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
      wheelbase: 3780,
      fuelTank: 1400,
      engine: engines.get('MX-13 390 Euro 6, 2017'),
      transmission: {
        ...transmissions.get('ZF 12TX2421TD R'),
        differential: 2.64,
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
      interior: 'Exclusive Black',
      color: 'T High Sleeper',
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
      wheelbase: 3809,
      fuelTank: 1475,
      engine: engines.get('DTI 13 520 Euro 6'),
      transmission: {
        ...transmissions.get('Optidriver AT2612F R'),
        differential: 2.64,
      },
    },
  ],
  [ // TD-LTR-06
    'TD-LTR-06', {
      manufacturer: 'MAN',
      model: 'TGX',
      cabinType: 'XL',
      plate: 'WN 957MK',
      chassis: '4x2',
      interior: 'Standard',
      color: 'Shadow Gray',
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
      wheelbase: 3809,
      fuelTank: 1250,
      engine: engines.get('D2676 353'),
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R'),
        differential: 2.71,
      },
    },
  ],
  [ // TD-LTR-07
    'TD-LTR-07', {
      manufacturer: 'MAN',
      model: 'TGX',
      cabinType: 'XL',
      plate: 'WJ 964FG',
      chassis: '4x2',
      interior: 'Standard',
      color: 'Shadow Gray',
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
      wheelbase: 3809,
      fuelTank: 1250,
      engine: engines.get('D2676 353'),
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R'),
        differential: 2.71,
      },
    },
  ],
  [ // TD-LTR-08
    'TD-LTR-08', {
      manufacturer: 'MAN',
      model: 'TGX',
      cabinType: 'XL',
      plate: 'WB 2090K',
      chassis: '4x2',
      interior: 'Standard',
      color: 'Shadow Gray',
      wheels: {
        front: '385/55 Michelin X Line Energy F',
        rear: '315/70 Michelin X Line Energy D 2',
      },
      wheelbase: 3809,
      fuelTank: 1250,
      engine: engines.get('D2676 353'),
      transmission: {
        ...transmissions.get('ZF 12AS2331TD R'),
        differential: 2.71,
      },
    },
  ],
]);

module.exports = { trucks };