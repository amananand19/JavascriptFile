// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
const bigNumber = 1551412555147521n
const cars = ["Saab", "Volvo", "BMW"];
let person = "John Doe";

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Aman",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
 
console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof cars);
console.log(typeof person); 

// +++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "amananand2569com"

let anothername = myYoutubename
anothername = "amanauranand"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "aman@google.com"

console.log(userOne.email);
console.log(userTwo.email);