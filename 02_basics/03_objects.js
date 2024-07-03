// Singleton
// Object.create

// Object Literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Sagar",
    "full name": "Sagar Chaudhary",
    [mySym]: "myKey1",
    age: 22,
    location: "Hodal",
    email: "sagar@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "Sagar@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "sagar@microsoft.com";
// console.log(JsUser);


JsUser.greetings = function(){
    console.log("Hello JS User");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());