/* eslint-disable sort-keys, no-inline-comments, capitalized-comments */
const Collection = require('collection');

/*
 * dealer / laborExchange:
 *   null: not in the city;
 *   false: is in the city, but not discovered;
 *   true: discovered;
 *   'manufacturer': [dealer only] dealer in the city;
*/

const map = new Collection([]);

module.exports = map;