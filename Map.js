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
]);

module.exports = map;