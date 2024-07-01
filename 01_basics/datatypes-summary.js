// PRIMITIVE DATATYPES

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = 1234567890098765n



// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman", "doga", "naagraj"] // square brackets mei array ko likhte h 
let myObj = {
    name: "Sagar",
    age: 22,   // curly brackets k andar jo bhi h unhe objects kahte h 
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);




// ***********************************************************************************

// Memories : Stack, Heap


let myYoutubename = "Sagariscoding"

let anothername = myYoutubename
anothername = "do code"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "google@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "sagar@google.com"

console.log(userOne.email);
console.log(userTwo.email);
