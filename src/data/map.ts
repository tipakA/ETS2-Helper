/* eslint-disable sort-keys, no-inline-comments, capitalized-comments */
import { CityName, CountryName, Manufacturer } from '../util/types';
import { GarageLevel } from './garages';

/*
 * dealer / laborExchange:
 *   null: not in the city;
 *   false: is in the city, but not discovered;
 *   true: discovered [laborExchange only];
 *   'manufacturer': dealer in the city;
*/

export interface CityData {
  name: CityName;
  dealer: null | false | Manufacturer;
  discovered: boolean;
  garage: { level: GarageLevel | null } | null;
  laborExchange: boolean | null;
  whole: boolean;
}

export interface CountryData {
  name: CountryName;
  cities: Array<CityData>;
}

// export const map = new Collection<CountryName, Country>([
export const map: Array<CountryData> = [
  {
    name: 'austria',
    cities: [
      { name: 'graz', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'innsbruck', dealer: null, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'klagenfurt', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'linz', dealer: null, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'salzburg', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'wien', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: true },
    ],
  },
  {
    name: 'belgium',
    cities: [
      { name: 'brussel', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'liege', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
    ],
  },
  {
    name: 'bulgaria',
    cities: [
      { name: 'burgas', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'karlovo', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'kozloduy', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'pernik', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'pirdop', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'pleven', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'plovdiv', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'ruse', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'sofia', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'varna', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'veliko tarnovo', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'czech',
    cities: [
      { name: 'brno', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'ostrava', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'praha', dealer: 'Renault', discovered: true, garage: { level: null }, laborExchange: false, whole: false },
    ],
  },
  {
    name: 'denmark',
    cities: [
      { name: 'aalborg', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'esbjerg', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'frederikshavn', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'gedser', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'hirtshals', dealer: null, discovered: true, garage: null, laborExchange: null, whole: true },
      { name: 'kobenhavn', dealer: 'Iveco', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'odense', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
    ],
  },
  {
    name: 'estonia',
    cities: [
      { name: 'kunda', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'narva', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'paldiski', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'parnu', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'tallinn', dealer: 'Scania', discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'tartu', dealer: 'DAF', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'finland',
    cities: [
      { name: 'helsinki', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'kotka', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'kouvola', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'lahti', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'loviisa', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'naantali', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'olkiluoto', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'pori', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'tampere', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'turku', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
    ],
  },
  {
    name: 'france',
    cities: [
      { name: 'ajaccio', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'bastia', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'bayonne', dealer: false, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'bonifacio', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'bordeaux', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'bourges', dealer: false, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'brest', dealer: 'Scania', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'calais', dealer: 'MAN', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'calvi', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'civaux', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'clermont-ferrand', dealer: null, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'dijon', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'golfech', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'la rochelle', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'lacq', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'le havre', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'le mans', dealer: 'Iveco', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'lile-rousse', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'lille', dealer: 'Scania', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'limoges', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'lyon', dealer: false, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'marseille', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'metz', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'montpelier', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'nantes', dealer: 'Mercedes-Benz', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'nice', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'paluel', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'paris', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'porto-vecchio', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'reims', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'rennes', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'roscoff', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'saint-alban', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'saint-laurent', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'strasbourg', dealer: 'Scania', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'toulouse', dealer: false, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
    ],
  },
  {
    name: 'germany',
    cities: [
      { name: 'berlin', dealer: 'MAN', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'bremen', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'dortmund', dealer: 'MAN', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'dresden', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'duisburg', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'dusseldorf', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'erfurt', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'frankfurt', dealer: false, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'hamburg', dealer: 'Iveco', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'hannover', dealer: 'Scania', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'kassel', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'kiel', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'koln', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'leipzig', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'magdeburg', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'mannheim', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'munchen', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'nurnberg', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'osnabruck', dealer: 'Volvo', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'rostock', dealer: 'Renault', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'stuttgart', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'travemunde', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'hungary',
    cities: [
      { name: 'budapest', dealer: 'Renault', discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'debrecen', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'pecs', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'szeged', dealer: 'Renault', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
    ],
  },
  {
    name: 'italy',
    cities: [
      { name: 'ancona', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'bari', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'bologna', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'cagliari', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'cassino', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'catania', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'catanzaro', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'firenze', dealer: false, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'genova', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'livorno', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'messina', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'milano', dealer: 'Scania', discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'napoli', dealer: false, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'olbia', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'palermo', dealer: 'Renault', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'parma', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'pescara', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'roma', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'sassari', dealer: 'Mercedes-Benz', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'suzzara', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'taranto', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'terni', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'torino', dealer: 'Iveco', discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'venezia', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'verona', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'villa', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'latvia',
    cities: [
      { name: 'daugavpils', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'liepaja', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'rezekne', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'riga', dealer: false, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'valmiera', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'venstpils', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'lithuania',
    cities: [
      { name: 'kaunas', dealer: 'Renault', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'klaipeda', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'mazeikiai', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'panevezus', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'siauliai', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'utena', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'vilnius', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
    ],
  },
  {
    name: 'luxembourg',
    cities: [{ name: 'luxembourg', dealer: 'Volvo', discovered: true, garage: { level: null }, laborExchange: true, whole: false }],
  },
  {
    name: 'netherlands',
    cities: [
      { name: 'amsterdam', dealer: false, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'groningen', dealer: null, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'rotterdam', dealer: 'Mercedes-Benz', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'norway',
    cities: [
      { name: 'bergen', dealer: 'DAF', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'kristiansand', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'oslo', dealer: false, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'stavanger', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
    ],
  },
  {
    name: 'poland',
    cities: [
      { name: 'bialystok', dealer: null, discovered: true, garage: { level: 1 }, laborExchange: true, whole: false },
      { name: 'gdansk', dealer: 'Scania', discovered: true, garage: { level: 2 }, laborExchange: true, whole: true },
      { name: 'katowice', dealer: null, discovered: true, garage: { level: 1 }, laborExchange: null, whole: false },
      { name: 'krakow', dealer: 'MAN', discovered: true, garage: { level: 1 }, laborExchange: true, whole: true },
      { name: 'lodz', dealer: null, discovered: true, garage: { level: 1 }, laborExchange: true, whole: false },
      { name: 'lublin', dealer: null, discovered: true, garage: { level: 1 }, laborExchange: null, whole: false },
      { name: 'olsztyn', dealer: null, discovered: true, garage: { level: 1 }, laborExchange: null, whole: false },
      { name: 'poznan', dealer: null, discovered: true, garage: { level: 1 }, laborExchange: false, whole: false },
      { name: 'szczecin', dealer: false, discovered: true, garage: { level: 1 }, laborExchange: true, whole: false },
      { name: 'warszawa', dealer: 'Mercedes-Benz', discovered: true, garage: { level: 2 }, laborExchange: true, whole: false },
      { name: 'wroclaw', dealer: 'Volvo', discovered: true, garage: { level: 1 }, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'portugal',
    cities: [
      { name: 'beja', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'coimbra', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'corticadas de lavre', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'evora', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'faro', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'guarda', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'lisboa', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'olhao', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'ponte de sor', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'porto', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'setubal', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'sines', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'romania',
    cities: [
      { name: 'bacau', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'brasov', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'bucuresti', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'calarasi', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'cernavoda', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'cluj-napoca', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'constanta', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'craiova', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'galati', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'hunedoara', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'iasi', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'mangalia', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'pitesti', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'resita', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'targu mures', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'timisoara', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'russia',
    cities: [
      { name: 'kaliningrad', dealer: 'Mercedes-Benz', discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'luga', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'petersburg', dealer: 'DAF', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'pskow', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'sosnowy', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'wyborg', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'slovakia',
    cities: [
      { name: 'bratislava', dealer: 'Mercedes-Benz', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'bystrica', dealer: false, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'kosice', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
    ],
  },
  {
    name: 'spain',
    cities: [
      { name: 'a coruna', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'albacete', dealer: false, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'algeciras', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'almaraz', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'almeria', dealer: 'Iveco', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'badajoz', dealer: false, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'bailen', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'barcelona', dealer: false, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'bilbao', dealer: null, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'burgos', dealer: 'DAF', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'ciudad real', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'cordoba', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'el ejido', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'gijon', dealer: false, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'granada', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'huelva', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'leon', dealer: false, discovered: false, garage: null, laborExchange: false, whole: false },
      { name: 'lleida', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'madrid', dealer: false, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'malaga', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'mengibar', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'murcia', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'navia', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'o barco', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'pamplona', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'port de sagunt', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'puertollano', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'salamanca', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'santander', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'sevilla', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'soria', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'tarragona', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'teruel', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'valencia', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'valladolid', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'vandellos', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'vigo', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'vila-real', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'zaragoza', dealer: 'Iveco', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
    ],
  },
  {
    name: 'sweden',
    cities: [
      { name: 'goteborg', dealer: 'Volvo', discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'helsingborg', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'jonkping', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'kalmar', dealer: false, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'kapellskar', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'karlskrona', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'linkoping', dealer: false, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'malmo', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'nynashamn', dealer: null, discovered: true, garage: null, laborExchange: null, whole: false },
      { name: 'orebro', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'sodertalje', dealer: null, discovered: false, garage: null, laborExchange: null, whole: false },
      { name: 'stockholm', dealer: 'Scania', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'trelleborg', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'uppsala', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'vasteras', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'vaxjo', dealer: null, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'switzerland',
    cities: [
      { name: 'bern', dealer: false, discovered: true, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'geneve', dealer: 'Mercedes-Benz', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'zurich', dealer: 'DAF', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
    ],
  },
  {
    name: 'turkey',
    cities: [
      { name: 'edirne', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'istanbul', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'tekirdag', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
    ],
  },
  {
    name: 'uk',
    cities: [
      { name: 'aberdeen', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'cardiff', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'birmingham', dealer: 'MAN', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'cambridge', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'carlisle', dealer: null, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'dover', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'edinburgh', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'felixstowe', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'glasgow', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'grimsby', dealer: false, discovered: false, garage: { level: null }, laborExchange: null, whole: false },
      { name: 'liverpool', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'london', dealer: 'Volvo', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'manchester', dealer: 'Scania', discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'newcastle', dealer: false, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'plymouth', dealer: false, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'sheffield', dealer: null, discovered: true, garage: { level: null }, laborExchange: true, whole: false },
      { name: 'southampton', dealer: null, discovered: true, garage: { level: null }, laborExchange: false, whole: false },
      { name: 'swansea', dealer: null, discovered: false, garage: { level: null }, laborExchange: false, whole: false },
    ],
  },
];
