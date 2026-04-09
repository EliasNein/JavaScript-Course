/*
function greet (name) {
  if (!name) {
    console.log('Hi there!');
  } else {
    console.log(`Hello ${name}!`);
  }
}

greet('Elias');
greet('Simon');
greet();
*/
/*
function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
convertToFahrenheit(25);

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
convertToCelsius(86);

function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    return `${convertToFahrenheit(degrees)} ${unit}`;
  } else if (unit === 'F') {
    return `${convertToCelsius(degrees)} ${unit}`;
  }
}

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));
*/

function convertLength(length, from, to = 'km') {
  if (from === 'miles' && to === 'km') {
    return `${length * 1.6} km`;
  } else if (from === 'km' && to === 'miles') {
    return `${length / 1.6} miles`;
  } else if (from === 'miles' && to === 'ft') {
    return `${length * 5280} ft`;
  } else if (from === 'km' && to === 'ft') {
    return `${length * 3281} ft`;
  } else if (from === 'lbs' || to === 'lbs') {
    return `Invalid unit: ${from || to}`
  } else {
    return `${length} ${to}`;
  }
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));

console.log(convertLength(5, 'lbs', 'lbs'));