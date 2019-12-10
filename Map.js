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
        [ 'graz', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'innsbruck', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'klagenfurt', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
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
  [ // Bulgaria
    'bulgaria', {
      cities: new Collection([
        [ 'burgas', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'karlovo', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'kozloduy', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'pernik', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'pirdop', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'pleven', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'plovdiv', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'ruse', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'sofia', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'varna', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'veliko tarnovo', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Czech Republic
    'czech', {
      cities: new Collection([
        [ 'brno', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'ostrava', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'praha', { dealer: 'Renault', discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Denmark
    'denmark', {
      cities: new Collection([
        [ 'aalborg', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'esbjerg', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'frederikshavn', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'gedser', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'hirtshals', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: true }],
        [ 'kobenhavn', { dealer: 'Iveco', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'odense', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Estonia
    'estonia', {
      cities: new Collection([
        [ 'kunda', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'narva', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'paldiski', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'parnu', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'tallinn', { dealer: 'Scania', discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'tartu', { dealer: 'DAF', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Finland
    'finland', {
      cities: new Collection([
        [ 'helsinki', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'kotka', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'kouvola', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'lahti', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'lovisa', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'naantali', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'olkiluoto', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'pori', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'tampere', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'turku', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // France
    'france', {
      cities: new Collection([
        [ 'ajaccio', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'bastia', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'bonifacio', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'bordeaux', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'bourges', { dealer: false, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'brest', { dealer: 'Scania', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'calais', { dealer: 'MAN', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'calvi', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'civaux', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'clermont-ferrand', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'dijon', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'golfech', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'la-rochelle', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'le-havre', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'le-mans', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'lile-rousse', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'lille', { dealer: 'Scania', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'limoges', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'lyon', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'marseille', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'metz', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'montpelier', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'nantes', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'nice', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'paluel', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'paris', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'porto-vecchio', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'reims', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'rennes', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'roscoff', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'saint-alban', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'saint-laurent', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'strasbourg', { dealer: 'Scania', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'toulouse', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
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
        [ 'hannover', { dealer: 'Scania', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
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
        [ 'travemunde', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Hungary
    'hungary', {
      cities: new Collection([
        [ 'budapest', { dealer: 'Renault', discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'debrecen', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'pecs', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'szeged', { dealer: 'Renault', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
      ]),
    },
  ],
  [ // Italy
    'italy', {
      cities: new Collection([
        [ 'ancona', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'bari', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'bologna', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'cagliari', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'cassino', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'catania', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'catanzaro', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'firenze', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'genova', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'livorno', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'messina', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'milano', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'napoli', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'olbia', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'palermo', { dealer: 'Renault', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'parma', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'pescara', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'roma', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'sassari', { dealer: 'Mercedes-Benz', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'suzzara', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'taranto', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'terni', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'torino', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'venezia', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'verona', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'villa', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
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
        [ 'venstpils', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Lithuania
    'lithuania', {
      cities: new Collection([
        [ 'kaunas', { dealer: 'Renault', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'klaipeda', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'mazeikiai', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'panevezus', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'siauliai', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'utena', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'vilnius', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Luxembourg
    'luxembourg', {
      cities: new Collection([[ 'luxembourg', { dealer: 'Volvo', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }]]),
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
        [ 'krakow', { dealer: 'MAN', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: true }],
        [ 'lodz', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'lublin', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'olsztyn', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'poznan', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'szczecin', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'warszawa', { dealer: 'Mercedes-Benz', discovered: true, garage: { level: 1, owned: true }, laborExchange: true, whole: false }],
        [ 'wroclaw', { dealer: 'Volvo', discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Romania
    'romania', {
      cities: new Collection([
        [ 'bacau', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'brasov', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'bucuresti', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'calarasi', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'cernavoda', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'cluj-napoca', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'constanta', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'craiova', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'galati', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'hunedoara', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'iasi', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'mangalia', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'pitesti', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'resita', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'targu mures', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'timisoara', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
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
        [ 'sosnowy', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
        [ 'wyborg', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // Slovakia
    'slovakia', {
      cities: new Collection([
        [ 'bratislava', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'bystrica', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
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
        [ 'kapellskar', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'karlskrona', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'linkoping', { dealer: false, discovered: true, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'malmo', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'nynashamn', { dealer: null, discovered: true, garage: null, laborExchange: null, whole: false }],
        [ 'orebro', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'sodertalje', { dealer: null, discovered: false, garage: null, laborExchange: null, whole: false }],
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
        [ 'bern', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'geneve', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'zurich', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
  [ // Turkey
    'turkey', {
      cities: new Collection([
        [ 'edirne', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'istanbul', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'tekirdag', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
      ]),
    },
  ],
  [ // UK
    'uk', {
      cities: new Collection([
        [ 'aberdeen', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'cardiff', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'birmingham', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'cambridge', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'carlisle', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'dover', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'edinburgh', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'felixstowe', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'glasgow', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'grimsby', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: null, whole: false }],
        [ 'liverpool', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'london', { dealer: 'Volvo', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'manchester', { dealer: 'Scania', discovered: true, garage: { level: null, owned: false }, laborExchange: true, whole: false }],
        [ 'newcastle', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'plymouth', { dealer: false, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'sheffield', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'southampton', { dealer: null, discovered: true, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
        [ 'swansea', { dealer: null, discovered: false, garage: { level: null, owned: false }, laborExchange: false, whole: false }],
      ]),
    },
  ],
]);

module.exports = map;