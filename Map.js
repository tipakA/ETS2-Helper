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
  [ // Finland
    'finland', {
      cities: new Collection([
        [ 'helsinki', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'kotka', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'kouvola', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'lahti', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'lovisa', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'naantali', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'olkiluoto', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'pori', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'tampere', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'turku', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Germany
    'germany', {
      cities: new Collection([
        [ 'berlin', { dealer: 'MAN', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'bremen', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'dortmund', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'dresden', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'duisburg', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'dusseldorf', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'erfurt', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'frankfurt', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'hamburg', { dealer: 'Iveco', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'hannover', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'kassel', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'kiel', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'koln', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'leipzig', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'magdeburg', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'mannheim', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'munchen', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'nurnberg', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'osnabruck', { dealer: 'Volvo', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'rostock', { dealer: 'Renault', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'stuttgart', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'travemunde', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Hungary
    'hungary', {
      cities: new Collection([
        [ 'budapest', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'debrecen', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'pecs', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'szeged', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Latvia
    'latvia', {
      cities: new Collection([
        [ 'daugavpils', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'liepaja', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'rezekne', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'riga', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'valmiera', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'venstpils', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Lithuania
    'lithuania', {
      cities: new Collection([
        [ 'kaunas', { dealer: 'Renault', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'klaipeda', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'mazeikiai', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'panevezus', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'siauliai', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'utena', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'vilnius', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Luxembourg
    'luxembourg', {
      cities: new Collection([[ 'luxembourg', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }]]),
    },
  ],
  [ // Netherlands
    'netherlands', {
      cities: new Collection([
        [ 'amsterdam', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'groningen', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'rotterdam', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Norway
    'norway', {
      cities: new Collection([
        [ 'bergen', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'kristiansand', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'oslo', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'stavanger', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Poland
    'poland', {
      cities: new Collection([
        [ 'bialystok', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'gdansk', { dealer: 'Scania', discovered: true, garage: { level: 3, owned: true }, laborExchange: true, whole: true }],
        [ 'katowice', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'krakow', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'lodz', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'lublin', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'olsztyn', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'poznan', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'szczecin', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'warszawa', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'wroclaw', { dealer: 'Volvo', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Russia
    'russia', {
      cities: new Collection([
        [ 'kaliningrad', { dealer: 'Mercedes-Benz', discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'luga', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'petersburg', { dealer: 'DAF', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'pskow', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'sosnowy', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'wyborg', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Slovakia
    'slovakia', {
      cities: new Collection([
        [ 'bratislava', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'bystrica', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'kosice', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
      ]),
    },
  ],
  [ // Sweden
    'sweden', {
      cities: new Collection([
        [ 'goteborg', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'helsingborg', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'jonkping', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'kalmar', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'kapellskar', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'karlskrona', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'linkoping', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'malmo', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'nynashamn', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'orebro', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'sodertalje', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'stockholm', { dealer: 'Scania', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'trelleborg', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'uppsala', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'vasteras', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'vaxjo', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Switzerland
    'switzerland', {
      cities: new Collection([
        [ 'zurich', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'bern', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'geneve', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
]);

module.exports = map;