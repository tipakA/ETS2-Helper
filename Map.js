/* eslint-disable sort-keys, no-inline-comments, capitalized-comments */
const Collection = require('collection');

/*
 * dealer / laborExchange:
 *   null: not in the city;
 *   false: is in the city, but not discovered;
 *   true: discovered;
 *   'manufacturer': [dealer only] dealer in the city;
*/

const map = new Collection([
  [ // Austria
    'austria', {
      cities: new Collection([
        [ 'graz', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'innsbruck', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'klagenfurt', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'linz', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'salzburg', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'wien', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: true }], // ?
      ]),
    },
  ],
  [ // Belgium
    'belgium', {
      cities: new Collection([
        [ 'brussel', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'liege', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Czech Republic
    'czech', {
      cities: new Collection([
        [ 'brno', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'ostrava', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'praha', { dealer: 'Renault', discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Denmark
    'denmark', {
      cities: new Collection([
        [ 'aalborg', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'esbjerg', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'frederikshavn', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'gedser', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'hirtshals', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'kobenhavn', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'odense', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Estonia
    'estonia', {
      cities: new Collection([
        [ 'kunda', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'narva', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'paldiski', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'parnu', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'tallinn', { dealer: 'Scania', discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'tartu', { dealer: 'DAF', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
      ]),
    },
  ],
]);

module.exports = map;