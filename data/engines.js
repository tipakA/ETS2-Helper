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

module.exports = engines;