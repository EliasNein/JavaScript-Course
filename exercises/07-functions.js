/*
function greet(name) {
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
function convertToFahrenheit (celsius) {
  return `${(celsius * 9 / 5) + 32}F`;
}
console.log(convertToFahrenheit(25));

function convertToCelsius(fahrenheit) {
  return `${(fahrenheit -32) * 5 / 9}C`;
}
console.log(convertToCelsius(86));


function convertTemperatures(degrees, unit) {
  if (unit === 'C' && degrees === 25) {
    return `${convertToFahrenheit(25)}`;
  } else if (unit === 'F' && degrees === 86) {
    return `${convertToCelsius(86)}`
  }
}

console.log(convertTemperatures(25, 'C'));
console.log(convertTemperatures(86, 'F'));
*/

function convertLength (length, from, to) {
  if (from !== 'miles' && from !== 'km' && from !== 'ft') {
    return `Invalid value: ${from} ${to}`;
  } else if (to !== 'miles' && to !== 'km' && to !== 'ft') {
    return`Invalid value: ${from} ${to}`;
  } else if (from === 'miles' && to === 'km') {
    return `${length * 1.6} ${to}`;
  } else if (from === 'km' && to === 'miles') {
    return `${length / 1.6} ${to}`;
  } else if (from === to && to === from) {
    return `${length} ${to}`;
  } else if (from === 'miles' && to === 'ft') {
    return `${length * 5280} ${to}`;
  } else if (from === 'km' && to === 'ft') {
    return `${length * 3281} ${to}`;
  }
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));

console.log(convertLength(5, 'lbs', 'lbs'));
//miles to feet 5280
//miles to km 3281
