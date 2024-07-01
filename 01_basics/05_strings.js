const name = "Sagar"
const repoCount = 10

// console.log(name + repoCount + " Value ")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // is called string interpolation


const gameName = new String('Sagar-SM')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));


const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-7, 5);
console.log(anotherString);

const newStringOne = "     Sagar     ";
console.log(newStringOne);
console.log(newString.trim());

const url = "https://sagar.com/sagar%20chaudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('subhash'));

console.log(gameName.split('-'));