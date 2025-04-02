// 
function printMyFullName (){
    let myFirstName = 'Ayomide'
    let myLastName = 'Aina'
    let space = ' '
    let myFullName = myFirstName+ space + myLastName;
    return myFullName
}
console.log(printMyFullName());

// function to return parameters
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Ayomide', 'Aina'))

  // function to return the sum of two numbers
function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(addNumbers(30, 16));

// Higher Order functions 
// countires 
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'IceLand',
  'Ireland',
  'Japan',
  'Kenya'
];

countries.forEach(country => console.log(country));
// countries.forEach((element) => console.log(element.toUpperCase()));

const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase);

// country length
const countryLength = countries.map(country => country.length);
console.log(countryLength); 

//to filter out countries having six character
const countriesSixChracters = countries.filter(country => country.length === 6);
console.log(countriesSixChracters);

// To filter out countries containing six letters and more in the country array
const countriesWithSixOrMoreLetters = countries.filter(country => country.length >= 6);
console.log(countriesWithSixOrMoreLetters);

// Use to filter out country start with 'E'
const countriesStartWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartWithE);

//countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand);

// countries that ends with ia
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia);


// numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(number => console.log(number));

// squares of number
const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare);


// Names
const names = ['Tamara', 'Mathias', 'Elias', 'Brook'];
names.forEach(name => console.log(name)); 

//To change each name to uppercase in the names array
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase);

// Products
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

//Use  to map the products array to its corresponding prices


//to filter out only prices with values
const productsWithPrices = products.filter(item => 
  typeof item.price === 'number' && !isNaN(item.price)
);
console.log(productsWithPrices);


const dog = {};
console.log(dog);

// dog's properties
dog.name = 'Bingo';
dog.legs = 4;
dog.color = 'brown';
dog.age = 3;


dog.bark = function() {
  return 'Woof! Woof!';
};

console.log('Name:', dog.name);         
console.log('Legs:', dog.legs);  
console.log('Color:', dog.color);  
console.log('Age:', dog.age);     
console.log('Bark:', dog.bark());  
