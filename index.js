const map = require('./Map.js');
const company = require('./TDelivery.js');

// Console.log(map.get('austria').cities.get('wien').discovered);

const cities = [];
for (const [ c, country ] of map) {
  for (const [ name, city ] of country.cities) {
    if (city.dealer) cities.push(`${c} - ${name} - ${city.dealer}`);
  }
}
console.log(cities.join('\n'));
console.log(cities.length);