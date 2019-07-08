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
        nm: 2100,
        at: [ 1000, 1400 ],
      },
    },
  ],
  [ // Cursor 13 500
    'Cursor 13 500', {
      model: 'Cursor 13 500',
      power: power(500),
      torque: {
        nm: 2300,
        at: [ 1000, 1500 ],
      },
    },
  ],
  [ // OM 471 Euro VI
    'OM 471 Euro VI', {
      model: 'OM 471 Euro VI',
      power: power(476),
      torque: {
        nm: 2300,
        at: [1100],
      },
    },
  ],
  [ // MX-11 320 Euro 6
    'MX-11 320 Euro 6', {
      model: 'MX-11 320 Euro 6',
      power: power(435),
      torque: {
        nm: 2100,
        at: [ 1000, 1450 ],
      },
    },
  ],
]);

const transmissions = new Collection([]);

const trucks = new Collection([]);

module.exports = trucks;