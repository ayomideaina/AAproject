let firstName = "Aina";
let lastName = "Ayomide";
let country = "Nigeria";
let city = "Lagos";
let age = 25;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);  //string
console.log(typeof lastName);   //string
console.log(typeof country);    //string
console.log(typeof city);       // string
console.log(typeof age);        // number
console.log(typeof isMarried);  // boolean
console.log(typeof year);       // number

//2. 
console.log(typeof '10' === typeof 10); // false
console.log(parseInt('9.8') === 10); // false

//3.  Truthy values
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean([]));

//4. Falsy values
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

//5.  Logical expressions
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true

//6. Calculate triangle area
// let base = prompt("Enter base of the triangle:");
// let height = prompt("Enter height of the triangle:");
// let area = 0.5 * base * height;
// console.log(`The area of the triangle is ${area}`);

// 7
/*
let birthYear = prompt("Enter birth year:");
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
    console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
}
*/

// 8
let challenge = "30 Days Of JavaScript";
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.slice(3));
console.log(challenge.slice(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
console.log(challenge.startsWith("30 Days"));
console.log(challenge.endsWith("JavaScript"));

//19 Random number between 0 and 100
console.log(Math.floor(Math.random() * 101));

// 20
let a = 15;
let b = 34;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

// Using ternary operator
console.log(a > b ? "a is greater than b" : "a is less than b");

// Grading system
let score = 65;
if (score >= 80 && score <= 100) {
    console.log("A");
} else if (score >= 70 && score < 80) {
    console.log("B");
} else if (score >= 60 && score < 70) {
    console.log("C");
} else if (score >= 50 && score < 60) {
    console.log("D");
} else {
    console.log("F");
}

