/* eslint-disable sort-keys, no-inline-comments */
const Collection = require('collection');

function power(hp) {
  const powers = {};
  powers.hp = hp;
  powers.kw = Math.round(hp * 0.736);
  return powers;
}

const engines = new Collection([]);

const transmissions = new Collection([]);

const trucks = new Collection([]);

module.exports = trucks;