// let myName = "Sagar     "
// let myChannel = "Code     "


// console.log(myName.trueLength)



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    siderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}


Object.prototype.sagar = function(){
    console.log(`sagar is present in all objects`)
}


Array.prototype.heySagar = function (){
    console.log(`Sagar says hello`);
}
// heroPower.sagar()
// myHeros.sagar()
// myHeros.heySagar()
// heroPower.heySagar()



// Inheritance

const User = {
    name: "Code",
    email: "code@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "CodeAurCOde"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sagar".trueLength()
"iceTea".trueLength()  