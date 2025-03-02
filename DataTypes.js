let firstName = "Aina";
let lastName = "Ayomide";
let country = "Nigeria";
let city = "Lagos";
let age = 19;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);  
console.log(typeof lastName);   
console.log(typeof country);    
console.log(typeof city);       
console.log(typeof age);        
console.log(typeof isMarried);  
console.log(typeof year);       

//2. 
let typeOfString = typeof '10';
let number = 10;

console.log(typeOfString === number);
console.log(parseInt('9.8') === 10); 

//3.  Truthy values
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean([]));

//4. Falsy values
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

//5.  Logical expressions
const k= 4 > 3 && 10 < 12;
const n= 4 < 3 && 10 > 12;

const v= 4 > 3 || 10 > 12;
console.log(k);
console.log(n);
console.log(v);

console.log(!(4 > 3));
console.log(!(4 < 3)); 
console.log(!false);
console.log(!(k));
console.log(!(v));
console.log(!(4 === '4')); 

//6. Calculate triangle area
// let base = prompt("Enter base of the triangle:");
// let height = prompt("Enter height of the triangle:");
// let area = 0.5 * base * height;
// console.log(`The area of the triangle is ${area}`);

// 7
let birthYear = prompt("Please enter your birth year:");
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
    console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
}


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

//19
console.log(Math.floor(Math.random() * 101));

// 20
let a = 15;
let b = 34;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

// ternary operator
console.log(a > b ? "a is greater than b" : "a is less than b");

// 21
let score = 65;
if (score >= 80 && score <= 100) {
    console.log("grade A");
} else if (score >= 70 && score < 80) {
    console.log("grade B");
} else if (score >= 60 && score < 70) {
    console.log("grade C");
} else if (score >= 50 && score < 60) {
    console.log("grade D");
} else {
    console.log("grade F");
}

