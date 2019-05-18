"use strict";
//var
//let
//const

// let score;
// score = 30;

//Declare a variable named score
let score = 309;

let x = 4;
let y = 5;

//operators
let z = x + y;
let a = x - y;
let b = x / y;
let c = x * y;
let d = x ** y;
console.log(`The addition of ${x} and value of ${y} is equals to ${z}`);
console.log(`The substraction of ${x} and value of ${y} is equals to ${a}`);
console.log(`The division of ${x} and value of ${y} is equals to ${b}`);
console.log(`The multiplication of ${x} and value of ${y} is equals to ${c}`);
console.log(`The value of ${x} raised to the power of ${y} is equals to ${d}`);

console.log(typeof score);

//string variables
let name = "Teencode";
let name2 = "Joshua Tosin";

console.log(typeof name);
console.log(name2);

//number variable
const age = 19;
console.log(age);

//boolean variable
const tosin = false;
console.log(typeof tosin);

//null variable
let esther = null;
console.log(esther);

//Agrrayss
let arr = [];

let nameOfstudents = ["Joshua", "Tosin", "Emeka", "Musa"];
let lengthOfArr = nameOfstudents.length;
console.log(nameOfstudents);

//For loop for iterating over an array
for (let i = 0; i < nameOfstudents.length; i++) {
  console.log(`${nameOfstudents[i]} is present`);
}

//Array methods
const numberArr = [1, 2, 3, 4];
numberArr.push(5);
numberArr.push(7);
numberArr.pop();
numberArr.splice(numberArr[1], 1);
console.log(numberArr);

//objects
let obj = {};

obj = {
  name: "Musa",
  email: "musa@gmail.com",
  sex: "Female",
  age: 78,
  nameOfstudents: [{ name: "Joshua" }, "Tosin", "Emeka", "Musa"]
};

obj.sex = "Male";
obj.phone = "02134567";

console.log(obj);
console.log(obj.phone);
console.log(obj.nameOfstudents[0].name);

//concatination of strings
const newName = `${obj.nameOfstudents[0].name} ${obj.nameOfstudents[1]}`;

const newNames = obj.nameOfstudents[0].name + " " + obj.nameOfstudents[1];

const newName2 = obj.nameOfstudents[0].name.concat(" " + obj.nameOfstudents[1]);
console.log(newName);
console.log(newNames);
console.log(newName2);

//Array of objects
const personalInfo = [
  {
    name: "Musa",
    email: "musa@gmail.com",
    sex: "Male",
    age: 78
  },
  {
    name: "Mary",
    email: "mary@gmail.com",
    sex: "Female",
    age: 22
  },
  {
    name: "Arya",
    email: "arya@gmail.com",
    sex: "Female",
    age: 18
  },
  {
    name: "John",
    email: "john@gmail.com",
    sex: "Male",
    age: 25
  }
];

//function declaration
function speak() {
  console.log("Hello world!");
}

//function invocation
speak();
speak();
speak();
speak();
speak();


//conditional statements

const string2 = '2';
const num2 = 5;

console.log(string2 == num2); //true
console.log(string2 === num2); //false

if (num2 === 2)
{
  console.log('correct');
} else
{
  console.log('wrong');
}

const roundOff = 5;
if (roundOff === 4.986)
{
  console.log('correct');
} else if (roundOff === 5)
{
  console.log('correct');
} else if (roundOff === 4.99)
{
  console.log('correct');
} else
{
  console.log('wrong');
}

//modulus %
const mod = 5 % 2;
if (mod === 0)
{
  console.log('2 is a factor of 5')
} else
{
  console.log('2 is not a factor of 5')
}

//functions with parameters

function add(x, y) {
  return `The addition of ${x} and ${y} = ${x + y}`;
}

console.log(add(2,3));

function welcomeUsers(name) {
  return `Welcome, ${name} to Teencode camp`;
}

console.log(welcomeUsers('Lola'));

const checkFactorial = (number, factor) => {
  if (number % factor === 0 && typeof(number) === 'number')
  {
    return `${factor} is a factor of ${number}`
  } else if (typeof(number) !== 'number' || typeof(factor) !== 'number')
  {
    return `Pls, input a number`
  } else
  {
    return `${factor} is not a factor of ${number}`

  }
}

console.log(checkFactorial('25', 5));

//function expression
const hello = function (name) {
  return `Hello ${name}`;
}

console.log(hello('Rex'));

//Arrow functions
const hi = (name) => {
  const val = 'Hello';
  return `${val} ${name}`
};

const hi2 = name => `Hello ${name}`;

// const forEach = (callback) => {
//   const array = [0, 1, 3];
//   callback(array);
// }

console.log(hi('John'));

const arrofAges = [26, 56, 78, 9, 20, 44, 16, 10];

//for each

// const callback = function (age) {
//   console.log(`Your age is ${age}`);
// }

//for in loop
for (const age in arrofAges)
{
  console.log(arrofAges[age]);
}

arrofAges.forEach(age => console.log(`Your age is ${age}`));

//map
// const agesAfter5years = arrofAges.map(age => age + 5);
// console.log(agesAfter5years);

//chaining
arrofAges.map(age => age + 5).forEach(age => console.log(age));

const greaterThan18 = arrofAges.filter(age => age > 18);

console.log(greaterThan18);

const ages = [1, 2, 3, 4];

const sumOfAges = ages.reduce((acc, curr) => acc + curr, 0);

console.log(sumOfAges);